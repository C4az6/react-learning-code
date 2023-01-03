/**
 * 简单认识React
 * React是一个构建用户界面的JavaScript库，不是框架
 * 
 * React主观意愿
 * 1.React仅仅负责View层渲染
 * 2.我是一个视图渲染的工具库，我不做框架的事情
 * 
 * 简单使用React
 *  怎么负责视图
 * 
 * 1.添加根容器
 * 2.引入CDN脚本
 * 3.创建React组件
 * 
 * React -> React API - 处理视图的API集合
 * ReactDOM -> 从render -> 虚拟DOM -> 真实DOM
 * 
 * 一个React组件
 *  1.继承React类
 *  2.render函数返回一个视图
 * 
 * npx 是 npm5.2+的包运行工具
 * create-react-app 内部的工程化: babel/Webpack
 * 
 * 创建React项目：npx create-react-app my-react-app
 * 
 * 打包项目：npm run build
 * 
 * 
 */

// 类组件必须继承React.Component
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    // 保存状态
    this.state = {
      openStatus: false
    }
  }
  // 渲染视图必须放到render函数中
  render() {
    return '<h1>视图</h1>'
  }
}

ReactDOM.render(
  React.createElement(MyButton),
  document.getElementById('app')
)