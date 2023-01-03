// JSX

/**
 * JSX到底是什么?
 *  1.一种标签语法、对JS进行的语法拓展
 *  2.不是字符串、也不是HTML标签
 *  3.描述UI呈现与交互的直观的表现形式
 *  4.生成React元素
 * 
 * React为什么没有把视图和逻辑分离呢？
 *  1.渲染和UI标记是有逻辑耦合的，比如绑定事件处理函数
 *  2.即使是这样的耦合，也能实现关注点分离
 * 
 * 
 * JSX插值表达式
 *  表达式：一切有效的（符合JS逻辑编程的）表达式 { title }
 *  JSX被编译以后 -> React元素 -> 普通元素 
 */

// 创建元素方式1
// const rEl = <h1>this is my frist jsx experience.</h1>

// 创建元素方式2
/* const rEl = React.createElement('h1', {
  className: 'title'
}, '这是我的第一个 JSX Demo...'); */



class MyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openStatus: false
    }
  }

  statusChange() {
    this.setState({
      openStatus: !this.state.openStatus
    })
  }
  render() {
    // JSX遵循JS的命名规范，一般使用cameCase小驼峰命名
    return (
      <div className="wrapper">
        <p className="text">
          {
            /* 差值表达式 */
            this.state.openStatus ? '打开状态' : '关闭状态'
          }
        </p>
        <button onClick={this.statusChange.bind(this)}>
          {this.state.openStatus ? '关闭' : '打开'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(MyButton),
  document.getElementById('app')
)