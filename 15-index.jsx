/* 
  错误边界与使用技巧

  错误边界 -> React 16增加

  防止某个组件的UI渲染错误导致整个应用崩溃

  子组件发生JS的错误,有备用的渲染UI

  错误边界 -> 组件 -> 只能用class组件来写
*/

/* 
  static getDerivedStateFromError(error)
    必须是一个静态方法
    参数：子组件抛出的错误
    返回值就是新的state
    获取捕获错误 修改错误状态
    渲染阶段调用，不允许出现副作用（例如操作DOM, setTimeout）

  无法捕获的错误:
    1 事件处理函数内部的错误
    2 异步代码 setTimeout ajax
    3 服务端渲染
    4 错误边界组件内部报错

  componentDidCatch(error, info) -> 原型上的方法
    边界错误组件捕获异常，并进行后续处理
    作用：错误信息获取，运行副作用
    在组件抛出错误后调用
    参数：
      1 error：抛出的错误
      2 info：组件引发错误相关的信息 组件栈
*/

/* 
  错误边界组件捕获错误的时机：
    渲染时、生命周期函数中、组件数的构造函数中
  
  如读嵌套多个错误边界组件，会进行冒泡,冒泡到最近的父级错误边界

*/

// 错误边界处理函数
class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  // static标记的静态方法，实例不会继承，必须通过类自身调用：ErrorBoundary.getDerivedStateFromError
  static getDerivedStateFromError(error) {
    // console.log('>>>>>> 1')
    console.log("getDerivedStateFromError: ", error);
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    // console.log(">>>>>>>>>> 2");
    console.log('==========', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        // <h1>this is error ui</h1>
        <h1>{abc.title}</h1>
      )
    }
    return this.props.children
  }
}

class ErrorBoundary2 extends React.Component {
  constructor(props) {
    super(props);

    window.onerror = function (err) {
      console.log(err);
    }
  }
  state = {
    hasError: false
  }

  // static标记的静态方法，实例不会继承，必须通过类自身调用：ErrorBoundary.getDerivedStateFromError
  static getDerivedStateFromError(error) {
    console.log('>>>>>> 1')
    console.log("getDerivedStateFromError: ", error);
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(">>>>>>>>>> 2");
    console.log('==========', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>this is error ui 2</h1>
      )
    }
    return this.props.children
  }
}

class Test extends React.Component {
  render() {
    return (
      // data没有定义会导致整个应用崩溃
      <div>
        <p>{data.title}</p>
        {/* <p>我是你爹</p>/ */}
      </div>
    );
  }
}


class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    /* setTimeout(() => {
      throw new Error('this is a setTimeout Error');
    }, 1000) */
  }
  handleClick() {
    console.log('handleClick execute')
    throw new Error('this is a button click error~');
  }
  render() {
    return (
      <p onClick={this.handleClick}>this is content</p>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Sub></Sub>
        </ErrorBoundary>
        <ErrorBoundary2>
          <ErrorBoundary>
            <Test></Test>
          </ErrorBoundary>
        </ErrorBoundary2>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)