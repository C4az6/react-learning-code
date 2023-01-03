import { ThemeContext } from "../../context";
export default class NavItem extends React.Component {
  render() {
    const { item, index } = this.props;
    console.log('index: ', index);
    return (
      <ThemeContext.Consumer>
        {
          theme => {
            return <div className={!index ? `item active-${theme}` : `item`}>{item}</div>
          }
        }
      </ThemeContext.Consumer>

    )
  }
}