export default class Get extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const res = await axios(this.props.url);
    console.log(">>>>>> response ", res);
    this.setState({
      data: res.data
    }, () => {
      setTimeout(() => {
        this.setState({
          component: this.props.children(this.state.data)
        })
      }, 2000)
    })
  }

  state = {
    data: [],
    component: this.props.loading || 'Loading...'
  }

  render() {
    console.log(this.state.data);
    return this.state.component
  }
}