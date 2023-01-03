export default class Table extends React.Component {
  state = {
    headers: [
      'Name',
      'ID',
      'Age'
    ],
    info: [
      'xiaoming',
      1,
      35
    ]
  }
  render() {
    return (
      <table border="1">
        <caption>Private InfoMation</caption>
        <thead>
          <tr>
            <TableHeaders headers={this.state.headers}></TableHeaders>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCells info={this.state.info}></TableCells>
          </tr>
        </tbody>
      </table>
    )
  }
}

class TableHeaders extends React.Component {

  render() {
    console.log(this.props.headers)
    return (
      <React.Fragment>
        {
          this.props.headers.map((item, index) => {
            return (
              <th key={index}>{item}</th>
            )
          })
        }
      </React.Fragment>
    )
  }
}

class TableCells extends React.Component {
  render() {
    return (
      /* 短语法，<> ，它会自动创建React.Fragment 组件出来 */
      <>
        {
          this.props.info.map((item, index) => {
            return (
              <td key={index}>{item}</td>
            )
          })
        }
      </>
    )
  }
}