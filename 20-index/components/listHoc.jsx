/* 
  HOC -> Hight Order Componnet
  1 HOC不是React提供的API，而是一种高级的设计模式
  2 HOC是一个函数，接收一个组件作为参数，返回一个新组件，因此也叫做高阶组件
  3 普通组件返回的是UI，HOC返回的是一个新组件
  4 HOC不能修改参数组件，只能传入组件所需要的props
  5 HOC是一个没有副作用的纯函数，纯函数不能有副作用，否则就不叫纯函数！
  6 HOC除了必须填入被包裹的组件参数以外，其余参数根据需求增加
  7 HOC不关心数据如何使用，包裹组件不关心数据从哪里来
  8 HOC和包裹组件直接唯一的契合点就是props

  一句话总结：高阶组件把一些组件中的雷同的东西抽象出来，创建一个类组件专门用来管理逻辑和数据，包裹的组件只负责视图渲染，互不干扰
*/

export default function listHoc(WrapperComponent, fetchListData) {
  // 返回一个类组件
  return class extends React.Component {
    state = {
      listData: []
    }

    async componentDidMount() {
      const result = await fetchListData(this.props.field);
      this.setState({
        listData: result.data
      })
    }

    removeStudent(id) {
      this.setState({
        listData: this.state.listData.filter(item => item.id !== id)
      })
    }

    likeTeacher(id) {
      this.setState({
        listData: this.state.listData.map(item => {
          if (item.id === id) {
            item.like += 1;
          }
          return item
        })
      })
    }

    render() {
      return (
        <>
          {
            this.props.field === 'student'
              ?
              <WrapperComponent data={this.state.listData} removeStudent={this.removeStudent.bind(this)}></WrapperComponent>
              :
              <WrapperComponent data={this.state.listData} likeTeacher={this.likeTeacher.bind(this)}></WrapperComponent>
          }
        </>
      )
    }
  }

}
