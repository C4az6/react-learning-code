function InputHoc(WrapperComponent) {

  // 重写参数组件的生命周期函数,没有必要通过prototype修改，可以直接在类组件中增加实例方法修改
  // 高阶组件是不可以修改参数组件的，因为这样修改可能会导致参数组件内部逻辑的执行失效
  /* WrapperComponent.prototype.componentDidUpdate = function () {
    console.log('我是InputHoc')
  } */

  class InputHocComponent extends React.Component {
    state = {
      inputValue: ''
    }

    // 一切的功能都可以在容器组件内实现，与参数组件相互独立


    /* 
      HOC更加关注逻辑与状态的管理、参数组件的逻辑与状态的订阅
      一句话总结HOC：一个函数接收一个新的组件，然后在返回新的组件过程中，去渲染这个传入的参数组件，
      中间有哪些需要复用的逻辑就写在新返回的包裹组件中，参数组件需要哪些props就传递哪些props
    */
    componentDidUpdate() {
      console.log('i am inputHoc component~');
    }

    valueInput(e) {
      this.setState({
        inputValue: e.target.value
      })
    }

    render() {
      // 细节：把a解构出来之后，args中就只有除了a以外的剩余参数了，这个技巧很不错。
      const { a, ...rest } = this.props

      return (
        <WrapperComponent
          inputValue={this.state.inputValue}
          valueInput={this.valueInput.bind(this)}
          {...rest}
        >

        </WrapperComponent>
      )
    }
  }

  InputHocComponent.displayName = 'InputHoc'

  return InputHocComponent
}

export default InputHoc