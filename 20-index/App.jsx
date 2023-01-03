import InputHoc from "./components/InputHoc"
import MyInput from './components/MyInput'

const MyInputHoc = InputHoc(MyInput);

class App extends React.Component {
  state = {
    a: 1,
    b: 2,
    c: 3
  }
  render() {
    return (
      <MyInputHoc {...this.state}></MyInputHoc>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)