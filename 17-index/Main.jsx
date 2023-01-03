import Header from './components/Header'
import BottomNav from './components/BottomNav'
export default class Main extends React.Component {
  state = {
    navData: [
      '第一',
      '第二',
      '第三',
      '第四',
    ]
  }
  render() {
    return (
      <div>
        <Header>这是标题</Header>
        <div style={{ marginTop: '88px' }}>
          <button onClick={() => this.props.themeChange('black')}>black</button>
          <button onClick={() => this.props.themeChange('red')}>red</button>
          <button onClick={() => this.props.themeChange('orange')}>orange</button>
          <button onClick={() => this.props.themeChange('purple')}>purple</button>
        </div>
        <BottomNav data={this.state.navData}></BottomNav>
      </div>
    )
  }
}