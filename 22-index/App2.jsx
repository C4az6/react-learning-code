class MyButton extends React.Component {
  render() {
    return (
      <button>click</button>
    )
  }
}

const colorSystem = {
  'primary': 'lightSkyBlue',
  success: 'lightGreen',
  'warning': 'orange',
  'danger': 'red'
}

const MyUI = {
  Button: class extends React.Component {
    render() {
      const { type, children } = this.props
      return (
        <button
          style={{
            color: '#fff',
            backgroundColor: colorSystem[type]
          }}
        >{children}</button>
      )
    }
  },
  Input: function (props) {
    const { placeholder, onValueInput } = props;
    return (
      <input type="text" placeholder={placeholder} onChange={e => onValueInput(e)} />
    )
  }
}

class LoginBtnGroup extends React.Component {
  render() {
    return (
      <div>
        <button>登录</button>
        <button>注册</button>
      </div>
    )
  }
}

class WelcomeInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>欢迎您, {this.props.username}</h1>
      </div>
    )
  }
}

class Header extends React.Component {
  // 静态属性
  static component = {
    'login': LoginBtnGroup,
    'welcome': WelcomeInfo
  }

  render() {
    const HeaderUser = Header.component[this.props.type]
    return (
      <HeaderUser {...this.props}></HeaderUser>
    )
  }
}


class App extends React.Component {
  valueInput(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      // <div className="box" id="J_Box">
      //   <h1 className="title">This is a <span>TITLE~</span></h1>
      // </div>

      /* 
        JSX其实是React.createElement函数调用的语法糖
        react 会把 JSX 编译成 React.createElement调用形式
      */
      // React.createElement(
      //   'div',
      //   {
      //     className: 'box',
      //     id: 'J_Box'
      //   },
      //   React.createElement(
      //     'h1',
      //     {
      //       className: 'title'
      //     },
      //     'this is a ',
      //     React.createElement(
      //       'span',
      //       null,
      //       'TITLE...'
      //     )
      //   )
      // )


      /* 
        React的元素类型
        MyButton 是React的一种元素类型
        这个组件必须存在在当前模块的作用域中

        React会把JSX编译成React.createElement的调用形式
          React.createElement 必须要让React库存在在当前的模块作用域中 必须要 import React from 'react'
          生成环境：index.html -> script:src -> React cdn
          不需要 import React
          因为React是挂在到全局的
      */
      // <MyButton></MyButton>
      // <div>
      //   {console.log(window)}
      // </div>

      /* 
        如何在JSX中使用.语法，对象访问语法调用组件，在命名空间下访问
      */

      // <div>
      //   <MyUI.Button type="primary">点赞🚀🏆⚡</MyUI.Button>
      //   <MyUI.Input placeholder='学前端就上youkewang.top' onValueInput={this.valueInput.bind(this)}></MyUI.Input>
      // </div>

      /* 
        书写规范：
        小写字母开头代表HTML内置组件！！！
          例如: <div> <h1> <p>
          React会把这些标签转换成字符串作为React.createElement的第一个参数
        
          大写字母开头的自定义组件 <MyButton />
          React会编译成React.createElement(MyButton)
      */

      // <h1>123</h1>

      // 下面演示运行时选择React类型
      <div>
        <Header type='welcome' username='Alexander'></Header>
      </div>
    );
  }
}

ReactDOM.render(
  <App></App>,
  // React.createElement(App),
  document.getElementById('app')
)