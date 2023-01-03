import StButton from '../Button'
import { LoginStatusContext } from '../../context'
export default class Footer extends React.Component {
  render() {
    return (
      <LoginStatusContext.Consumer>
        {
          ({ status, login }) => {
            return (
              <div className="footer">
                <h2>Footer</h2>
                <StButton>Footer({
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