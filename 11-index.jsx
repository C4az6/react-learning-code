/* 
  父子组件数据关系与状态提升：
    两个组件（无父子关系）共享一个数据并且同步数据变化,其实就是把子组件的数据提到父组件管理，子组件只需要使用父组件传递过来的属性和事件即可。
    主要理解单项数据流，父 -> 子 => props向下传递
    props是只读数据 -> props -> 数据操作 -> 父组件来完成 -> 数据由父组件管理
*/

class Info extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.inputNum}</p>
        <p>
          输入长度: {this.props.username.length}
        </p>
        <p>提示: {
          this.props.username.length < 6 ? '长度必须大于等于6位' :
            (this.props.username.length >= 6 && (this.props.username.length <= 12 ? '长度合法' : '长度必须小于12'))
        }</p>
      </div>
    )
  }
}

/* 
  组件嵌套与调用，与类组件和函数组件没有关系
*/
/* function Info(props) {
  return (
    <div>
      <p>{props.inputNum}</p>
      <p>
        输入长度: {props.username.length}
      </p>
      <p>提示: {
        props.username.length < 6 ? '长度必须大于等于6位' :
          (props.username.length >= 6 && (props.username.length <= 12 ? '长度合法' : '长度必须小于12'))
      }</p>
    </div>
  )
} */

// 类组件调用（实例化）的时候，组件内部的状态是唯一且独立的
/* class UsernameInput extends React.Component {
  state = {
    username: ""
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Info username={this.state.username} inputNum={this.props.inputNum}></Info>
        <div>
          <input type="text" onChange={(e) => this.changeUsername(e)} />
        </div>
      </div>
    )
  }
} */

// 状态提升演示
class UsernameInput extends React.Component {
  render() {
    return (
      <div>
        <Info username={this.props.username} inputNum={this.props.inputNum}></Info>
        <div>
          <input type="text" value={this.props.username} onChange={e => this.props.usernameChange(e.target.value)} />
        </div>
      </div>
    )
  }
}

/* function UsernameInput(props) {
  // 在函数组件中使用Hooks方式创建state
  const [username, setUsername] = React.useState('');
  return (
    <div>
      <Info username={username} inputNum={props.inputNum}></Info>
      <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
    </div>
  )
} */


class App extends React.Component {
  state = {
    username: ""
  }

  usernameChange(username) {
    this.setState({
      username
    })
  }
  render() {
    return (
      <div>
        <UsernameInput username={this.state.username} inputNum={1} usernameChange={this.usernameChange.bind(this)}></UsernameInput>
        <UsernameInput username={this.state.username} inputNum={2} usernameChange={this.usernameChange.bind(this)}></UsernameInput>
      </div>
    )
  }
}

// 类组件和函数组件是可以相互嵌套调用的，因为最终都会被JSX编译成React元素
/* function App() {
  return (
    <div>
      <UsernameInput inputNum={1}></UsernameInput>
      <UsernameInput inputNum={2}></UsernameInput>
    </div>
  )
} */

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)