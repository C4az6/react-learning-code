// 组件和props

/* 
  组件：
    在前端，组件是视图的一个片段
    包含: 视图标记、事件、数据、逻辑、外部的配置

    组件一般是内部管理数据集合(state)
    外部传入配置集合(props)
*/

/* class Test extends React.Component {
  // 传入属性 -> 配置 -> 由props保存
  constructor(props) {
    super(props);
    console.log(props);
    // this.state = {
    //   title: this.props.title
    // }
  }

  // 数据 -> 内部数据 -> 也叫state状态
  state = {
    title: this.props.title
  }

  // 事件处理函数
  handleBtnClick() {
    // 逻辑部分
    console.log('handle button click.');
    console.log(this)
    this.setState({
      title: 'this is a title component'
    })
  }

  render() {
    // 视图标记
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleBtnClick.bind(this)}>click</button>
      </div>
    )
  }
} */

/* 
  类组件render函数中的this默认指向的是元素本身，需要通过bind绑定this指向到组件实例
*/

// ReactDOM.render(<Test title="this is my component" />, document.getElementById('app'));

/* 
  组件渲染过程：
    1 React主动调用Test组件
    2 将属性集合转换成对象 props => {title: 'this is my component'}
    3 将对象作为props传入组件
    4 替换JSX中的props或者state中的变量
    5 ReactDOM将最终的React元素通过一系列操作转换成真实DOM进行渲染
*/

/* 
  组件调用规范：
    1 视图标记时HTML标签 <div></div>
    2 大驼峰写法作为一个React元素 <Test /> 组件 -> JSX -> React元素
      <Test title="this is my component" />
    3 组件转换React元素
      React.createElement(Test, {title: 'this is a title component.'})

  组合组件
    title
      author

    paragraph

    App
*/

class Title extends React.Component {
  constructor(props) {
    // super(props)作用: 把接收的props参数挂载到this中
    super(props);
  }

  render() {
    const { title, author, para } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <Author author={author}></Author>
        <Para para={para}></Para>
      </div>
    )
  }
}

class Author extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span>{this.props.author}</span>
    )
  }
}

class Para extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>{this.props.para}</p>
    )
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   state = {
//     title: 'this is a title',
//     author: 'Alexander',
//     para: 'this is a paragraph'
//   }

//   render() {
//     return (
//       <div>
//         {/* <Title title={this.state.title} author={this.state.author} para={this.state.para}></Title> */}
//         {/* 解构写法 */}
//         <Title {...this.state}></Title>
//         {/* <Author author={this.state.author}></Author> */}
//         {/* <Para para={this.state.para}></Para> */}
//       </div>
//     )
//   }
// }

/* ReactDOM.render(
  <App></App>,
  document.getElementById('app')
) */


/* 
  属性props和数据/状态state的区别:
    1 state -> 属性池 {} 组件内部的管理数据的容器
        组件内部可写可读
    2 props -> 属性池 {} 外部调用组件时传入的属性集合
        组件内部可读不可写

      组件外部的数据 -> 组件内部是不应该有权限修改的
*/


/* 
  state与props的结合:
    content => props => outer
    state => content => default => props.content
*/

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  state = {
    content: this.props.content
  }

  handleBtnClick() {
    // 会报错，提示无法修改只读的props.content属性
    // this.props.content = '我在修改props.'
    this.setState({
      content: '123'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.content}</h1>
        <button onClick={this.handleBtnClick.bind(this)}>modify</button>
      </div>
    )
  }
}


ReactDOM.render(
  <App content="this is my content."></App>,
  document.getElementById('app')
)


/* 
  函数组件一定要是一个纯函数
  纯函数能保证绝对的复用性
  相同的入参保证相同的结果
  纯函数不可以修改入参
*/

function test(a, b) {
  return a + b;
}

/* 
  从设计上说，在函数内部更改入参其实是在组件运行时更改了外部的配置,配置的意义就丧失了，因此props是只读的！
*/

function test(a, b) {
  a = a + 1;
  return a + b;
}



test(1, 2)