/* 
  Fragment和短语法应用
  原生DOM创建文档碎片：document.createDocumentFragment()

  文档碎片节点是一个容器，用来存储文档碎片，等收集完文档碎片后统一挂载到真实DOM上，这样可以减少浏览器重复渲染；
  文档碎片节点在真实DOM中是不存在的，可以理解为一个虚拟的容器。

  React中的一个组件都需要一个根节点，类似Vue的template标签，小程序中的block标签
*/

import Table from './Table'
import StaffList from './StaffList'
class App extends React.Component {
  render() {
    return (
      // <Table></Table>
      <StaffList></StaffList>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)

