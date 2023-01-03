/**
 * React.createRef() 使用细节分析
 * 通过createRef创建对象,通过元素的ref属性可以附加到React元素上
 * 一般通过构造器中的给this上的属性赋值一个ref,方便整个组件使用
 * ref只要传递到React元素中,就可以利用ref的current属性访问到真实的DOM节点
 * ref在componentDidMount和componentDidUpdate触发前更新!!!
 */

/**
 * ref有不同的使用方式：
 *  1 ref放在html元素上面 那么current就是一个真实DOM节点
 *  2 如果放在class组件上 那么current就指向一个组件实例
 *  3 如果放在函数组件（没有实例），附加不到组件上，无法使用ref，得使用hooks
 */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.testRef = React.createRef();
  }
  state = {
    text: 'hello ref'
  }

  componentDidMount() {
    console.log("App > testRef: ", this.testRef);

    setTimeout(() => {
      this.setState({
        text: 'hello alexander'
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <Test ref={this.testRef}>{this.state.text}</Test>
        <Test2></Test2>
      </div>
    )
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.divRef = React.createRef();
    console.log(this.divRef);   // null
  }

  componentDidMount() {
    console.log(">>>>>>> componentDidMount", this.divRef);
  }

  componentDidUpdate() {
    console.log(">>>>>>> componentDidUpdate", this.divRef);
  }

  render() {
    return (
      <div ref={this.divRef}>{this.props.children}</div>
    )
  }
}

function Test2() {
  const divRef = React.useRef(null);

  React.useEffect(() => {
    console.log(">>>>>>>>> function component ref: ", divRef)
  }, [])

  return (
    <div ref={divRef}>
      Hello Function REF
    </div>
  )
}


ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)