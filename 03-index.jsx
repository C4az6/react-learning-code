/**
 * html中的div容器叫根节点
 * 根节点内的所有的内容都是由ReactDOM进行管理
 * 一个React应用只有一个根节点
 * 用ReactDOM.render方法将react元素渲染到根节点中
 */

const rEl = <h1>这是一个标题</h1>

/**
 * @param ReactElement - react元素
 * @param rootNode - 根节点
 */
ReactDOM.render(
  rEl,
  document.getElementById('app')
)
/* 
  基本的更新逻辑
    1.React元素是不可变的对象（immutable Object）
      1.不能添加属性
      2.不能修改属性
      3.不能删除属性
      4.不能修改属性的枚举、配置、可写
*/


/* 
  渲染之前 -> 每个React元素组成一个虚拟DOM的对象结构 -> 渲染
  更新之前 -> 形成新的虚拟DOM的对象结构 -> 对比新旧的虚拟DOM节点 -> 分析出两者的不同点 -> 形成一个DOM更新的补丁 -> 操作真实DOM(更新真实DOM)
*/

// React的类组件
/* class Title extends React.Comonent {
  render() {
    return (
      <h1>this is a title~</h1>
    )
  }
} */

// React的函数组件
function Title() {
  return (
    <h1>this is a title~</h1>
  )
}

/* 
  如果是组件渲染
    ReactDOM.render的第一个参数一定要是一个React元素
    1.组件使用JSX语法
    2.使用React.createElement将组件转换为React元素
  
  这样才能使组件内部的render函数执行
*/

ReactDOM.render(React.createElement(Title), document.getElementById('app'))