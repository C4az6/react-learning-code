/* 
  Context总结：
    作用：给整个组件树共享全局数据
*/

// 创建context对象并传入默认数据
// const CityContext = React.createContext({
//   name: 'chengdu',
//   text: '成都'
// })



// class App extends React.Component {
//   state = {
//     cityInfo: {
//       name: 'chengdu',
//       text: '成都'
//     }
//   }

//   changeCity(cityInfo) {
//     this.setState({
//       cityInfo
//     })
//   }

//   render() {
//     return (
//       <CityContext.Provider value={this.state.cityInfo}>
//         <Header changeCity={this.changeCity.bind(this)}></Header>
//         <span>{this.state.cityInfo.text}</span>
//       </CityContext.Provider>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     // console.log("header components props: ", this.props.changeCity);
//     return (
//       <Selector changeCity={this.props.changeCity}>
//       </Selector>
//     )
//   }
// }

// class Selector extends React.Component {
//   /* 
//     React内部提供的上下文，将上下文的类型指定为CityContext
//     通过 this.context 就可以获取到上下文，此时上下文是CityContext
//     查找机制：向上找最近的CityContext的Provider，并且取值，就是cityInfo
//     给当前环境下的context重新指定引用 CityContext，在生命周期函数和render函数中都可以访问
//   */
//   static contextType = CityContext
//   render() {
//     // console.log("Selector component props: ", this.props);
//     return (
//       // 这里的this.context指的是CityContext.provider 组件传递的value数据,也就是cityInfo
//       <select value={this.context.name} onChange={(e) => {
//         this.props.changeCity({
//           name: e.target.value,
//           text: e.target[e.target.selectedIndex].text
//         })
//       }}>
//         <option value="beijing">北京</option>
//         <option value="chengdu">成都</option>
//         <option value="hangzhou">杭州</option>
//         <option value="shenzhen">深圳</option>
//       </select>
//     )
//   }
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.CitySelector = <CitySelector
      cityData={this.state.cityData}
      cityInfo={this.state.cityInfo}
      changeCity={this.changeCity.bind(this)}
    ></CitySelector>
  }
  state = {
    headerTitle: '这是标题',
    cityInfo: {
      name: 'chengdu',
      text: '成都'
    },
    cityData: [
      {
        name: 'beijing',
        text: '北京'
      },
      {
        name: 'shanghai',
        text: '上海'
      },
      {
        name: 'chengdu',
        text: '成都'
      },
      {
        name: 'guangzhou',
        text: '广州'
      },
      {
        name: 'shenzhen',
        text: '深圳'
      }
    ]
  }

  changeCity(cityInfo) {
    console.log(">>>>>>", cityInfo)
    this.setState({
      cityInfo
    })
  }

  render() {
    // 通过组合组件的方式来传递数据
    return (
      <div>
        <Header
          text={this.state.headerTitle}
          citySelector={this.CitySelector}
        >
        </Header>
        <span>{this.state.cityInfo.text}</span>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.text}</h1>
        <div>
          {this.props.citySelector}
        </div>
      </header>
    )
  }
}

class CitySelector extends React.Component {
  render() {
    console.log("-----: ", this.props.cityInfo.name)
    return (
      <select
        defaultValue={this.props.cityInfo.name}
        onChange={e => {
          this.props.changeCity({
            name: e.target.value,
            text: e.target[e.target.selectedIndex].text
          })
        }}
      >
        {
          this.props.cityData.map((item, index) => {
            return <option value={item.name} key={index}>{item.text}</option>
          })
        }
      </select>
    )
  }
}

/* 
  Context最适合的场景：杂乱无章的组件都需要同一些数据
  如果单纯为了不层层传递属性的话，Context实际上是不合适的
  Context弱点：弱化和污染组件的纯度，导致组件复用性降低
*/


ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)