/* class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

class DateTime extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    dateTime: new Date().toString()
  }

  // 组件已经被挂载到了真实DOM中，运行的函数
  componentDidMount() {
    this.t = setInterval(() => {
      this.setState({
        dateTime: new Date().toString()
      })
    }, 1000)
  }

  // 组件即将被卸载时运行的函数
  componentWillUnmount() {
    clearInterval(this.t);
    this.t = null
    console.log('Over');
  }

  render() {
    return (
      <h2 id="dateTime">当前时间：{this.state.dateTime}</h2>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <Title title="welcome to my borad"></Title>
        <DateTime></DateTime>
      </div>
    )
  }
}

ReactDOM.render(
  <Board></Board>,
  document.getElementById('app')
)

setTimeout(() => {
  // 卸载组件
  ReactDOM.unmountComponentAtNode(
    document.getElementById('app')
  );
}, 5000) */


/* 
  总结：
    1 如果想使用组件的时候，传入数据 - props 组件配置
    2 如果是组件内部使用的数据 - state 私有数据(状态)

  使用state的注意事项：
    1 必须使用setState方法来更改state
    2 多个setState是会合并调用
    3 props和state更新数据要谨慎，尽量避免直接依赖它们,很有可能是在异步程序中更新
      例如: 
        this.setState({
          result: this.state.result + this.props.content
        })

      正确做法,同步更新state：
        this.setState((state, props) => {
          // state是 上一个 state
          // props是 此次更新时被使用的props，也就是最新的
          result: state.result + props.content
        })

    4 setState操作合并的原理 - 浅合并
*/

/* 
  1 组件无论如何都不知道其他组件是否是有状态的
  2 组件也不关心其他组件是函数组件还是类组件
  3 state是组件内部特有的数据封装
  4 其他组件是无法读写修改该组件的
  5 组件可以通过其他组件调用的时候传入属性来传递state的值
  6 props虽然是响应式的,在组件内部是只读的
*/


class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    title: this.props.title
  }

  handleBtnClick() {
    this.setState({
      title: '我是修改之后的title'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleBtnClick.bind(this)}>change title</button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    title: 'this is a title'
  }
  render() {
    return (
      <div>
        <Title title={this.state.title}></Title>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)


/* 
  这种数据（状态）从父到子，由上到下传递的方式叫做单项数据流，props一定是单项数据流，Vue也是这样的
  
  state只能传递给自己的子组件
  state只能影响当前组件和子组件的UI
  state的安全影响范围
  组件，可以没有状态
  有没有状态，组件间都不受嵌套影响
  有无状态是可以切换的
*/