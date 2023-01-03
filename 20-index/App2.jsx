/* 
  高阶组件学习
  
  Student List
  {
    id,name,grade
  }

  Teacher List
  {
    id,name,subject,like
  }

  这个案例中,子组件的状态和事件都放在App中,会造成App组件非常臃肿,此时可以使用高阶组件进行优化
*/

import StudentList from "./components/StudentList"
import TeacherList from "./components/TeacherList"
import listHoc from "./components/listHoc"
import { fetchListData } from "./model"

const StudentListHoc = listHoc(StudentList, fetchListData)
const TeacherListHoc = listHoc(TeacherList, fetchListData)


/* 普通组件写法 */
/* class App extends React.Component {

  state = {
    studentList: [],
    teacherList: []
  }

  async componentDidMount() {
    const studentData = await fetchListData('student');
    const teacherData = await fetchListData('teacher');
    this.setState({
      studentList: studentData.data,
      teacherList: teacherData.data
    });
  }

  removeStudent(id) {
    this.setState({
      studentList: this.state.studentList.filter(item => item.id !== id)
    })
  }

  likeTeacher(id) {
    this.setState({
      teacherList: this.state.teacherList.map(item => {
        if (item.id === id) {
          item.like += 1;
        }
        return item;
      })
    })
  }
  render() {
    return (
      <div className="app">
        <StudentList data={this.state.studentList} removeStudent={this.removeStudent.bind(this)}></StudentList>
        <TeacherList data={this.state.teacherList} likeTeacher={this.likeTeacher.bind(this)}></TeacherList>
      </div>
    )
  }
} */

// 高阶组件写法
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <StudentListHoc field="student"></StudentListHoc>
        <TeacherListHoc field="teacher"></TeacherListHoc>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)
/* 
  横切关注点 -> mixins
  React是完全放弃mixins的，采用HOC来解决
  
  HOC的表现形式其实就是用一个容器组件来包裹参数组件。
  
  对参数组件本身的逻辑状态与视图的横向切割
  让HOC来完成逻辑和状态的管理
  让参数组件来完成视图的渲染

  让HOC将数据与逻辑传递到参数组件中
  从而完成关注点分离且有机结合的任务
*/

