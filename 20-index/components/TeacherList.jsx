export default class TeacherList extends React.Component {
  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>科目</th>
            <th>喜欢</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.data.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.subject}</td>
                  <td>{item.like}</td>
                  <td>
                    <button
                      onClick={() => this.props.likeTeacher(item.id)}
                    >👍</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}