// 代码分割之错误边界与Suspense和命名导出

import Loading from './16-loading.jsx'
// import ErrorBoundary from './ErrorBoundary'

// const TestComponent = React.lazy(() => import('./16-index.module'));


/* class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          123
        </div>
        <ErrorBoundary>
          <React.Suspense fallback={<Loading></Loading>}>
            <TestComponent></TestComponent>
          </React.Suspense>
        </ErrorBoundary>

      </div>
    )
  }
} */

// React.lazy 只支持 默认导出的组件，就是export default xxx
const Test1 = React.lazy(() => import('./16-modules-folder/Test1'));
const Test2 = React.lazy(() => import('./16-modules-folder/Test2'))

class App extends React.Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<Loading />}>
          <Test1></Test1>
          <Test2></Test2>
        </React.Suspense>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)