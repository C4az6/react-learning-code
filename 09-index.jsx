// 受控组件

const hobbiesData = [
  {
    name: '钢琴',
    value: 'piano'
  },
  {
    name: '旅行',
    value: 'travel'
  },
  {
    name: '跑步',
    value: 'running'
  },
  {
    name: '唱歌',
    value: 'singing'
  }
]

class App extends React.Component {
  /* 
    1 state就是表单的唯一数据源,表单数据受控于state
    2 
  */
  state = {
    username: "",
    password: "",
    intro: "",
    gender: "male",
    isStudent: true,
    hobbies: ['running', 'singing']
  }
  handleUsernameChange(e) {
    // e.target表示事件源对象
    // 控制表单操作并且同步state
    this.setState({
      username: e.target.value
    }, () => {
      console.log(this.state.username)
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    }, () => {
      console.log(this.state.password)
    })
  }
  handleIntroChange = e => {
    this.setState({
      intro: e.target.value
    }, () => {
      console.log(this.state.intro)
    })
  }

  handleSubmitClick = (e) => {
    // 阻止默认行为
    e.preventDefault();
    const { username, password, intro, gender, isStudent, hobbies } = this.state;
    console.log(username, password, intro, gender, isStudent, hobbies)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      username: '',
      password: '',
      intro: '',
      gender: 'male',
      isStudent: true,
      hobbies: []
    })
  }

  /* handleGenderChange = e => {
    this.setState({
      gender: e.target.value
    })
  } */


  handleRadioChange(isStudent) {
    console.log(isStudent)
    this.setState({
      isStudent
    })
  }

  handleHobbiesChange(e) {
    console.log('checkbox event object: ', e)
    if (e.target.checked) {
      this.setState({
        hobbies: [...this.state.hobbies, e.target.value]
      })
    } else {
      this.setState({
        hobbies: this.state.hobbies.filter(item => item !== e.target.value)
      })
    }
  }
  render() {
    const { username, password, intro, gender, isStudent, hobbies } = this.state
    return (
      <form>
        <p>
          用户名:
          <input name="username" type="text" placeholder="用户名" value={username} onChange={this.handleChange} />
        </p>

        <p>
          密码:
          <input name="password" type="password" placeholder="密码" value={password} onChange={this.handleChange} />
        </p>

        <p>
          <textarea name="intro" placeholder="自我介绍" value={intro} onChange={this.handleChange}></textarea>
        </p>

        <p>
          <select name="gender" value={gender} onChange={this.handleChange} id="">
            <option value="male" >男</option>
            <option value="female">女</option>
          </select>
        </p>

        <p>
          是否是学生: 是<input type="radio" name="isStudent" checked={isStudent} onChange={this.handleRadioChange.bind(this, true)} />
          |
          否<input type="radio" name="isStudent" onChange={this.handleRadioChange.bind(this, false)} />
        </p>

        <p>
          {
            hobbiesData.map(item => {
              return (
                <span key={item.value}>
                  <span>{item.name}
                  </span>
                  <input type="checkbox" name="hobbies" value={item.value} checked={hobbies.includes(item.value)} onChange={this.handleHobbiesChange.bind(this)} />
                </span>
              )
            })
          }
        </p>

        <p>
          <button onClick={this.handleSubmitClick}>登录</button>
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