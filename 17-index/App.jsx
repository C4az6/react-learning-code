/* 
  React中可以通过一个加context的技术将数据传递到任何地方，主要解决props多层组件传递数据的繁杂操作

  React建议把组件做成扁平化的，也就是说不要在一个组件内部嵌套太多子组件，因为不利于props的传递
*/

/* 
  ThemeContext有2个东西：
    Provider：供应方
    Consumer：消费方，使用方
*/

import { ThemeContext } from './context'

import Main from './Main'
class App extends React.Component {
  state = {
    theme: 'red'
  }

  themeChange(theme) {
    this.setState({
      theme
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Main themeChange={this.themeChange.bind(this)}></Main>
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)






