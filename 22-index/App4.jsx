/**
 * ===== JSX函数作为子元素的应用 =====
 * 
 * JSX的props.children 和 props本身是有一致的特性的
 * 
 */


class Repeat extends React.Component {
  render() {
    const jsxArr = [];
    for (let i = 0; i < this.props.num; i++) {
      jsxArr.push(this.props.children(i))
    }
    return jsxArr;
    /* 
      return 的内容：
        [
          <p> this is item 1</p>,
          <p> this is item 1</p>,
          <p> this is item 1</p>
        ]
    */
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Repeat num={10}>
          {
            (index) => <p key={index}> this is item {index++}...</p>
          }
        </Repeat>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)