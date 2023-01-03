/* 
  Refs笔记：
  首先要知道，Refs允许我们访问真实DOM。

  React数据流是通过props来实现父子组件交互的，如果要修改数据，必须是父组件修改state后传递给子组件，实现子组件的数据更新。
  Refs允许我们强制修改子组件。

*/

/* 
  需求：
    管理input的焦点
    通过一个按钮，清空input value，让input聚焦
*/


/* class MyInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建ref引用
    this.inputRef = React.createRef()
  }

  state = {
    inputValue: ''
  }

  changeInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  inputOperating() {
    console.log(this.inputRef.current.value)
    // this.inputRef.current.value = '';
    this.inputRef.current.focus();
    this.setState({
      inputValue: ''
    })

  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} />
        <button
          onClick={this.inputOperating.bind(this)}
        >操作INPUT</button>
      </div>
    )
  }
} */

class MyVideo extends React.Component {
  constructor(props) {
    super(props)

    this.videoRef = React.createRef();
  }

  videoPlay() {
    this.videoRef.current.play();
  }

  videoPause() {
    this.videoRef.current.pause();
  }
  render() {
    return (
      <div>
        <video src="https://www.itwangzi.cn/wp-content/uploads/2022/03/1647091702-f1c0f8cb9f4da80.mp4"
          width="300"
          height="200"
          controls
          ref={this.videoRef}
        ></video>

        <button onClick={this.videoPlay.bind(this)}>Play</button>
        <button onClick={this.videoPause.bind(this)}>Pause</button>
      </div>
    )
  }
}

// 强制动画
// class MyBox extends React.Component {
//   constructor(props) {
//     super(props);

//     this.boxRef = React.createRef();
//   }
//   boxExten() {
//     /* const boxEl = this.boxRef.current;
//     boxEl.style.width = '400px'
//     boxEl.style.height = '500px' */


//     // 使用jQuery动画实现
//     const $box = $(this.boxRef.current);
//     console.log($box[0]);
//     $box.animate({
//       width: '500px',
//       height: '500px'
//     })
//   }
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             width: '200px',
//             height: '200px',
//             backgroundColor: 'lightpink',
//             // transition: 'all 1s'
//           }}
//           ref={this.boxRef}
//         >
//         </div>
//         <button onClick={this.boxExten.bind(this)}>Extend</button>
//       </>
//     )
//   }
// }

// 模态框打开关闭
class Modal extends React.Component {
  // 这种需求，通过ref实现起来非常复杂，使用外界传递进来的state会更高效
  render() {
    console.log(this.props.isOpen)
    return (
      <div
        style={{
          width: '300px',
          border: '1px solid #000',
          display: this.props.isOpen ? 'block' : 'none'
        }}
      >
        <h1> ths is a Modal </h1>
        <p>this is a super modal</p>
      </div>
    )
  }
}


class App extends React.Component {
  // 把子组件的状态放到父组件中,再通过props传递给子组件使用,这个叫做 "状态提升"!
  state = {
    isOpen: false
  }

  modalOpen(status) {
    this.setState({
      isOpen: status === 'open'
    })
  }
  render() {
    return (
      <div>
        {/* this.modal 其实相当于 Modal类 */}
        <Modal isOpen={this.state.isOpen}></Modal>
        <div>
          <button onClick={() => this.modalOpen('open')}>Open</button>
          <button onClick={() => this.modalOpen('close')}>Close</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)


/* 
  ref和state如何选择?
  先考虑使用state是否能完成需求,如果可以就直接使用state,不行再选择ref.
*/