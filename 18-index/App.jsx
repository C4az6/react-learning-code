import { btnStyle } from './config'
import Home from './views/Home'
import { BtnStyleContext, LoginStatusContext } from './context'
class App extends React.Component {
  state = {
    style: btnStyle.success,
    loginStatus: false
  }

  doClick(e) {
    console.log(e.target.textContent)
  }

  login() {
    this.setState({
      loginStatus: !this.state.loginStatus
    })
  }

  render() {
    return (
      <div className="app">
        <BtnStyleContext.Provider value={{ style: this.state.style, doClick: this.doClick }}>
          <LoginStatusContext.Provider value={{ status: this.state.loginStatus, login: this.login.bind(this) }}>
            <Home></Home>
          </LoginStatusContext.Provider>
        </BtnStyleContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)