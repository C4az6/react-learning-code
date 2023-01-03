/**
 * 下面内容会介绍Refs的转发机制以及在高阶组件中的使用
 * 
 * 如何通过ref能够让父组件拿到子组件的ref,例如父组件想控制子组件中的聚焦的状态，可能就会用到这种方法
 * 
 */

/* 
  如何将子节点的ref暴露给父组件 react@16.3 以上的版本才行
  将ref自动的通过组件传递给子组件
*/

// 这种类组件目前无法实现
/* class MyInput extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    componentName: 'myInput'
  }
  render() {
    return (
      <input type="text" placeholder="请填写.." />
    )
  }
} */

// 通过 React.forwardRef(() => {return React 元素})
// 3.通过React.forwardRef转发ref属性，props是父组件传递过来的参数，ref是用来替换本身的组件实例

// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     // 5. ref参数只能用forwardRef定义的组件内可接收
//     <input type="text" placeholder={props.placeholder} ref={ref} />
//   )
// })

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // 1.创建ref对象
//     this.myInputRef = React.createRef();
//   }

//   componentDidMount() {
//     // 4. myInputRef的current指向input DOM节点
//     console.log(this.myInputRef)

//   }

//   inputOperate() {
//     console.log('>>>>>', this)
//     const inputEl = this.myInputRef.current;
//     inputEl.value = "";
//     inputEl.focus();
//   }

//   render() {
//     return (
//       <div>
//         {/* 2.给子组件赋值ref */}
//         <MyInput ref={this.myInputRef} placeholder='输入点内容吧...'></MyInput>
//         <button onClick={this.inputOperate.bind(this)}>Click</button>
//       </div>
//     )
//   }
// }



// ref转发在高阶组件中使用
class MyInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <input type="text" placeholder={this.props.placeholder} />
    )
  }
}

function InputHoc(WrapperComponent) {
  class Input extends React.Component {
    render() {
      // 在容器组件内部获取ref属性，也就是forwardedRef，将forwardedRef传递给参数组件
      const { forwardedRef, ...rest } = this.props;

      return (
        <WrapperComponent ref={forwardedRef} {...rest}></WrapperComponent>
      )
    }
  }

  // 向子组件传递ref 
  function forwardRef(props, ref) {
    return <Input {...props} forwardedRef={ref}></Input>
  }
  // 在调试工具中显示转发Ref组件的名称
  forwardRef.displayName = 'Input - ' + WrapperComponent.name

  // 返回了一个转发ref的组件
  return React.forwardRef(forwardRef);
}


const MyInputHoc = InputHoc(MyInput)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputRef);
  }
  render() {
    return (
      // 用ref接收我们转发ref
      <MyInputHoc ref={this.inputRef} placeholder='我是你爹~'></MyInputHoc>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)