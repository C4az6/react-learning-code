export default class StaffList extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: '小红',
        desc: '研发'
      },
      {
        id: 2,
        name: '小张',
        desc: '市场'
      },
      {
        id: 3,
        name: '小明',
        desc: '财务'
      }
    ]
  }
  render() {
    return (
      <dl>
        {
          this.state.list.map(({ id, name, desc }) => {
            return (
              // 短语法不支持key,要使用React.Fragment组件,现阶段,React.Fragment除了key属性，不支持任何其他属性
              <React.Fragment key={id}>
                <dt>{id}: {name}</dt>
                <dd>{desc}</dd>
              </React.Fragment>
            )
          })
        }
      </dl>
    )
  }
}