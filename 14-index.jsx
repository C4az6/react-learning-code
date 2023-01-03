/* 
  代码分隔之lazySuspense与路由懒加载
*/

/* 
  lazy是React提供给你的懒（动态） 加载组件的方法 React.lazy()
    参数1个: 函数 -> 动态导入组件 import() 必须支持Promise
    减少打包体积,对初次渲染不适用的组件延迟加载
    依赖内置组件Suspense，给lazy加上loading指示器组件的一个容器组件
*/

import Loading from "./14-loading.jsx";

/* 
  lazy 接收一个动态导入组件的函数
  lazy函数返回一个Proimse
  Promise会resolve一个默认导出的React组件 export default xxx
  Suspense目前只和lazy配合实现组件等待加载指示器的功能
  服务端渲染不支持,必须使用Loadable Components
*/

const MainComponent = React.lazy(() => import('./14-main.jsx'))
const MainComponent2 = React.lazy(() => import('./14-main2.jsx'))

class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<Loading></Loading>}>
        <div>
          <MainComponent></MainComponent>
          <MainComponent2></MainComponent2>
        </div>
      </React.Suspense>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));