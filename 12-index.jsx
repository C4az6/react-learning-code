/* 
  组合与继承、CSS module
*/

/* 
  CSS Module: CSS模块化
*/

import styles from './12-index.module.css'

// class Container extends React.Component {
//   render() {
//     console.log(this.props)
//     /* 
//       1 如果container内部有内容,React会在props内部增加children属性
//       2 如果container内部有非元素内容, children: 非元素内容
//       3 如果container内部有单个元素内容，children: React元素内容
//       4 如果container内部有多个元素内容, children: [...(React元素对象)]

//       注意：props是一个传递任何内容的，JSX也可以通过props传递

//       JSX为什么可以通过props传递视图元素？
//         因为JSX本质上都会转成React元素（对象 Object）
//         视图通过props传递的机制比较像Vue的插槽
//         React并没有slot插槽概念
//         React本身就允许你通过Props传递任何类型的数据到子组件，因此完全没有必要再搞一个slot插槽出来
//     */
//     /* return (
//       <div className="container">
//         {this.props.children}
//       </div>
//     ) */

//     return (
//       <div className={styles.container}>
//         <div className={styles.header}>
//           {this.props.header}
//         </div>
//         <div className={styles.sidebar}>
//           {this.props.sidebar}
//         </div>
//         <div className={styles.main}>
//           {this.props.main}
//         </div>
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <p>Header</p>
//     )
//   }
// }

// class SideBar extends React.Component {
//   render() {
//     return (
//       <p>SideBar</p>
//     )
//   }
// }

// class Main extends React.Component {
//   render() {
//     return (
//       <p>Main</p>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     /* return (
//       <Container>
//         <h1>title</h1>
//         <h2>children title</h2>
//       </Container>
//     ) */
//     return (
//       <Container
//         header={<Header></Header>}
//         sidebar={<SideBar></SideBar>}
//         main={<Main></Main>}
//       >
//       </Container>
//     )
//   }
// }

// 多层组合
function Modal(props) {
  return (
    <div className={styles.modal}>
      <header className={styles.modalHeader}>
        <h1>{props.headerTitle}</h1>
      </header>
      <div className={styles.modalContent}>
        {props.children}
      </div>
    </div>
  )
}

function Alert(props) {
  return (
    <Modal headerTitle={props.headerTitle}>
      <p>{props.alertText}</p>
    </Modal>
  )
}

function LoginModal(props) {
  return (
    <Modal headerTitle='Login'>
      <form>
        <p>
          <input type="text" placeholder='username' />
        </p>
        <p>
          <input type="password" placeholder='password' />
        </p>
        <p>
          <button>Login</button>
        </p>
      </form>
    </Modal>
  )
}

function WelcomeAlert(props) {
  return (
    <Alert
      headerTitle="欢迎您，亲爱的用户"
      alertText="我是你的野爹~"
    >
    </Alert>
  )
}

function App() {
  return (
    <div>
      {/* <WelcomeAlert></WelcomeAlert> */}
      <LoginModal></LoginModal>
    </div>
  )
}


ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)

/* 
  React目前还没有发现有需要组件继承的需求
  因为通过children或者是传递视图React元素的方式完全可以解决组件组合的问题
  props可以传递任何类型的数据，所以组合的方式完全可以代替继承方案

  逻辑部分需要继承或者共用;
  这个需要你自己去写逻辑抽离的模块、函数、类，单独进行模块导入使用
*/