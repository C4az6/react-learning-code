/**
 * ===== JSX函数作为子元素的应用 =====
 * 
 * JSX的props.children 和 props本身是有一致的特性的
 * 非常适合做视图渲染前的一些逻辑处理
 */

import Http from './Http'

class App extends React.Component {
  render() {
    return (
      <table border="2">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          <Http.Get
            url="http://localhost:8080/getStudents"
            loading={
              <tr>
                <td colSpan="3">正在加载中...</td>
              </tr>
            }
          >
            {
              data => {
                return data.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.grade}</td>
                    </tr>
                  )
                })
              }
            }
          </Http.Get>
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)