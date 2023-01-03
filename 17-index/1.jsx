/* 
  React.createContext: 创建一个指定的Context对象
    组件会找离自己最近的Provider，获取其value
    如果没有匹配到Provider，则会使用default value,其他情况均不使用默认参数

  Context.Provider 是通过React.createContext API创建出来的一个组件
    1 Provider组件可以插入其他组件,用来订阅这个Context
    2 通过Provider的value属性来将数据传递给Consumer组件,Consumer组件通过箭头函数的参数来接收值
    3 value发生变化，插入Provider的组件都会重新渲染
    4 新旧值的对比算法和 Object.is API 使用的算法一样
*/

const AContext = React.createContext('default a');
const BContext = React.createContext('default b');

console.log(AContext);
// displayName主要针对devTools，给你提供一个具体的名称,方面调试
AContext.displayName = 'MyAContext';

class App extends React.Component {
  state = {
    a: 'a context',
    b: 'b context'
  }

  // 组件挂载完毕的生命周期函数
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 'aaaaaa context'
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <BContext.Provider value={this.state.b}>
          <AContext.Provider
            value={this.state.a}
          >
            <Test></Test>
          </AContext.Provider>
        </BContext.Provider>
      </div>
    )
  }
}

class Test extends React.Component {
  // 组件即将更新的生命周期函数
  shouldComponentUpdate() {
    console.log("Will Repain");
    return true
  }
  render() {
    /* 
      Consumer通过回调函数的参数来接收Provider组件传递过来的value参数
      如果value参数变化，context是会自动更新的
      Consumer内部使用函数作为子元素 -> function as child
      函数接收context最近的Provider提供的value
      如果没有Provider组件，则会找defaultValue,也就是通过React.createContext创建时定义的默认值
    */
    return (
      <div>
        <BContext.Consumer>
          {
            valueB => (
              <AContext.Consumer>
                {
                  valueA => {
                    return <div>{valueA} ------ {valueB}</div>
                  }
                }
              </AContext.Consumer>
            )
          }
        </BContext.Consumer>

        <BContext.Consumer>
          {
            valueB => (
              <AContext.Consumer>
                {
                  valueA => {
                    return <div>{valueA} ------ {valueB}</div>
                  }
                }
              </AContext.Consumer>
            )
          }
        </BContext.Consumer>

        <BContext.Consumer>
          {
            valueB => (
              <AContext.Consumer>
                {
                  valueA => {
                    return <div>{valueA} ------ {valueB}</div>
                  }
                }
              </AContext.Consumer>
            )
          }
        </BContext.Consumer>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)