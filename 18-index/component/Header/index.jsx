import StButton from '../Button'
import { LoginStatusContext } from '../../context'
export default class Header extends React.Component {
  render() {
    return (
      <LoginStatusContext.Consumer>
        {
          ({ status, login }) => {
            return (
              <div className="header">
                <h2>Header</h2>
                <StButton>Header({status ? '已登录' : '未登录'})</StButton>
                <button onClick={login}>登录/注销</button>
              </div>
            )
          }
        }
      </LoginStatusContext.Consumer>
    )
  }
}