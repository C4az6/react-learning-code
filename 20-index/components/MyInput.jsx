/* export default class MyInput extends React.Component {

  // 类的实例方法其实是挂载在类的原型上的，也就是：MyInput.prototype.componentDidUpdate = function () {}
  componentDidUpdate() {
    console.log('i am my input component');
  }

  render() {
    return (
      <div>
        <h1>{this.props.inputValue}</h1>
        <p>总计: {this.props.b + this.props.c}</p>
        <input type="text" placeholder="请填写"
          value={this.props.inputValue}
          onChange={this.props.valueInput}
        />
      </div>
    )
  }
} */


// 高阶组件接受的参数组件可以是类组件，也可以是函数组件,因为高阶组件只会把参数组件用来渲染
export default function MyInput(props) {
  React.useEffect(() => {
    console.log('我是MyInput Component')
  }, [props.inputValue]);
  return (
    <div>
      <h1>{props.inputValue}</h1>
      <p>总计: {props.b + props.c}</p>
      <input type="text" placeholder="请填写" value={props.inputValue} onChange={props.valueInput} />
    </div>
  )
}