/* 
  非受控组件：
  1 表单数据是不受控于state
  2 使用React ref从DOM节点中获取表单数据的组件
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);

    // 通过React.createRef创建ref引用
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.genderRef = React.createRef();
    this.fileRef = React.createRef();
  }
  state = {
    username: '',
    password: ''
  }
  handleSubmitClick(e) {
    e.preventDefault();
    console.log(this.usernameRef.current.value, this.passwordRef.current.value, this.genderRef.current.value, this.fileRef.current.files[0])
  }
  handleResetClick(e) {
    e.preventDefault();
    this.usernameRef.current.value = ''
    this.passwordRef.current.value = ''
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitClick}>
        <p>
          用户名：
          <input type="text" placeholder="用户名" ref={this.usernameRef} />
        </p>
        <p>
          密码:
          <input type="text" placeholder="密码" ref={this.passwordRef} />
        </p>

        <p>
          <select
            // form field的默认值,是组件挂载完毕后进行更新,不会导致DOM的任何更新
            defaultValue="female"
            ref={this.genderRef}
          >
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </p>

        <p>
          <input type="file" ref={this.fileRef} />
        </p>

        <p>
          {/* <button onClick={this.handleSubmitClick}>登录</button> */}
          <button type="submit">登录</button>
          <button onClick={this.handleResetClick}>重置</button>
        </p>
      </form>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)