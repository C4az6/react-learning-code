import Header from '../component/Header'
import Main from '../component/Main'
import Footer from '../component/Footer'

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <Header></Header>
        <hr />
        <Main></Main>
        <hr />
        <Footer></Footer>
        <hr />
      </div>
    )
  }
}