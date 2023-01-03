// 条件渲染

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }
  login = () => {
    const { username, password } = this.state;
    if (!username.trim() || !password.trim()) {
      return alert('用户名密码不能为空!')
    }

    // ### 登录操作
    this.props.login(username, password)
  }

  handleUserNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassWordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>
          用户名:
          <input type="text" placeholder="请输入用户名" onChange={this.handleUserNameChange} />
        </p>

        <p>
          密码:
          <input type="password" placeholder="请输入密码" onChange={this.handlePassWordChange} />
        </p>

        <p>
          <button onClick={this.login}>登录</button>
        </p>
      </div>
    )
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>欢迎您, 亲爱的用户!</h1>
        <button onClick={this.props.logout}>退出登录</button>
      </div>
    )
  }
}

class Tip extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { tipShow } = this.props
    if (!tipShow) {
      // 如果render函数返回null,不会进行任何渲染
      return null
    }
    return (
      <div>
        <p>this is a tip!</p>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    logged: true,
    tipShow: false
  }
  logout = () => {
    console.log("this: ", this)
    this.setState({
      logged: false,
      tipShow: false
    })
  }

  login = (username, password) => {
    console.log(username, password);
    if (username !== 'aaa' || password !== '123') {
      return alert('用户名或者密码错误!')
    }
    this.setState({
      logged: true,
      tipShow: true
    })
    console.log("login this: ", this);
  }

  render() {
    const { logged } = this.state;

    return (
      <div>
        {
          logged ? <Welcome logout={this.logout}></Welcome> : <LoginForm login={this.login}></LoginForm>
        }
        <Tip tipShow={this.state.tipShow}></Tip>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)