/* 
  React中的ref转发机制和各种细节：

  react@16.2及以下如何实现 Refs 转发？
  下面进行演示
*/

/* class MyInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <input type="text" ref={this.props.inputRef} />
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log("ref: ", this.inputRef);
  }

  render() {
    return (
      <MyInput inputRef={this.inputRef}></MyInput>
    )
  }
} */

// 回调Refs演示
// 其实就是通过一个变量保存要通过ref引用的DOM
class MyInput extends React.Component {
  constructor(props) {
    super(props)
    // this.myInput = null
  }

  /* setMyInput(el) {
    this.myInput = el;
  } */

  /* focusInput(e) {
    console.log('input dom: ', this.myInput);
    console.log(">>>>>>> ", this.myInput.value);
    this.myInput.value = ""
    this.myInput.focus();
  } */

  componentDidMount() {
    // 已经废弃的方式 this.refs.xxx
    console.log(this.refs.inputRef)
    /* 
      这种 string Refs 依赖组件实例下面的refs集合里的ref
      需要React保持追踪当前正在渲染的组件，this没法确定
      会导致React获取ref可能比较慢，而且不能在render函数中使用
      不能组合，只能有一个ref
    */
  }

  render() {
    console.log(this.refs.inputRef)
    return (
      <div>
        {/* <input type="text" ref={this.setMyInput.bind(this)} /> */}
        {/* <input type="text" ref={this.props.inputRef} /> */}
        <input type="text" ref='inputRef' />
        {/* <button onClick={this.focusInput.bind(this)}>Click!</button> */}
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.oInput = null;
  }
  componentDidMount() {
    console.log(">>>>>>> this.oInput ", this.oInput);
  }
  render() {
    return (
      <MyInput inputRef={el => this.oInput = el}></MyInput>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)

