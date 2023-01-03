import { nanoid } from "nanoid";
import NavItem from './Item'
import './index.scss'

export default class BottomNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bottom-nav">
        {
          this.props.data.map((item, index) => {
            return (
              <NavItem
                item={item}
                index={index}
                key={nanoid()}
              >

              </NavItem>
            )
          })
        }
      </div>
    )
  }
}