import { BtnStyleContext } from "../../context";
export default class StButton extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <BtnStyleContext.Consumer>
        {
          ({ style, doClick }) => {
            return (
              <button
                style={style}
                onClick={doClick}
                {...this.props}
              ></button>
            )
          }
        }
      </BtnStyleContext.Consumer>
    )
  }
}