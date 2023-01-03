import './index.scss';
import { ThemeContext } from '../../context'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => {
            console.log(theme);
            return <header className={`header ${theme}`}>{this.props.children}</header>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}