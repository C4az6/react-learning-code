import StButton from '../Button'
import { LoginStatusContext } from '../../context'
export default class Main extends React.Component {
  render() {
    return (
      <LoginStatusContext.Consumer>
        {
          ({ status, login }) => {
            return (
              <div className="main">
                <h2>Main</h2>
                <StButton>Main({
                  status ? '已登录' : '未登录'
                })</StButton>
              </div>
            )
          }
        }
      </LoginStatusContext.Consumer>
    )
  }
}