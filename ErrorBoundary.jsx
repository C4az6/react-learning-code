export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (<h1>This is a Error UI</h1>)
    }
    return this.props.children
  }
}
