// React事件处理函数绑定与事件对象

// DOM事件处理 addEventListener onclick=function(){}
// <button onclick="doSth"></button> 纯小写

// React元素也采用了类似于DOM0标准中的事件属性定义的方法
// JSX <button onClick={this.doSth}>click</button>  小写驼峰

// 直接创建React元素的写法: 
/* React.createElement(
  'button',
  {
    onClick: {this.doSth}
  },
  'click'
) */

// class App extends React.Component {
//   doSth() {
//     console.log('do something')
//   }

//   doSth2(e) {
//     // React事件对象，封装了原生的事件对象
//     /* 
//       SyntheticBaseEvent 合成基础事件对象 React重新定义的
//       这个SBE是遵守W3C事件对象的规范的，不存在任何的浏览器兼容性问题
//     */
//     console.log("event object: ", e);
//     // 阻止默认行为
//     e.preventDefault();
//     console.log('something 2')
//   }

//   /* 
//     为什么React要将事件处理直接在React元素上绑定？
//       React一直认为事件处理跟视图是有程序上的直接关系的
//       事件处理和视图写在一起可以更加直观的表述视图与逻辑的关系
//       更加好维护
//   */
//   render() {
//     return (
//       <div>
//         <button onClick={this.doSth}>click</button>
//         <a href="#" onClick={this.doSth2}>ckick</a>
//       </div>
//     )
//   }
// }

// this指向
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // 解决方式1
//     this.handleBtnClick = this.handleBtnClick.bind(this)
//   }

//   handleBtnClick() {
//     console.log("this：", this);
//     /* 
//       默认处理函数的this为undefined
//       ES6 class模块默认是不对事件处理函数进行this的再绑定

//       解决this指向的方法: 
//         1 bind(this) => 在构造器中做
//         2 bind(this) => 在视图标记中
//         3 回调 + 箭头函数
//           render每次执行的时候都会创建一个新的回调
//           如果给子组件的属性传递函数的时候，由于每次都要新创建一个回调，子组件每次都会接收一个新的函数，有可能会触发子组件的render渲染
//         4 class fields实验性写法
//     */
//   }

//   // 实验性写法 class fields
//   handleBtnClick2 = () => {
//     console.log(this)
//   }
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.handleBtnClick}>CLICK</button> */}
//         <button onClick={this.handleBtnClick2}>click</button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  // 回调方式是显示传入事件对象
  doSth(p1, p2, p3, e) {
    console.log(p1, p2, p3, e)
  }
  /* 隐式传入事件对象 */
  doSth2(p1, p2, p3, e) {
    console.log(p1, p2, p3, e)
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.doSth(1, 2, 3, e)}>click</button>
        <button onClick={this.doSth2.bind(this, 1, 2, 3)}>click</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)