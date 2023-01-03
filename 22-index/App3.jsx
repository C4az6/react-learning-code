/* 
  JSX的props讲解：
  JSX 大括号 {} 里面可以传入任何JavaScript表达式 (if, for, switch, function)
  非表达式，可以在JSX外面使用
*/

// function component
function MyTitle(props) {
  const { children, author, authorShow } = props;
  console.log(props)
  return (
    <div>
      <h1>{children}</h1>
      <p>{
        authorShow ? author : ''
      }</p>
    </div>
  )
}

class App extends React.Component {

  state = {
    mainTitle: '优课网',
    subTitle: 'youkewang.top',
    author: 'Alexander',
    titleShow: 'sub' // main/sub
  }

  render() {
    // let title = "";
    /* if (this.state.titleShow === 'sub') {
      title = <h2>{this.state.subTitle}</h2>
    } else {
      title = <h1>{this.state.mainTitle}</h1>
    } */

    /* switch (this.state.titleShow) {
      case 'main':
        title = <h1>{this.state.mainTitle}</h1>
        break;
      case 'sub':
        title = <h2>{this.state.subTitle}</h2>
        break;
      default:
        title = <h3>这里没有标题!</h3>
    } */

    // const { mainTitle, subTitle, titleShow } = this.state;
    // const { title, author, authorShow } = this.props
    // console.log('>>>>> ', title, author, authorShow)

    // 如何排除不需要的属性?可以先把不需要的解构出来，然后其他的通过...rest剩余参数的方式获取
    const { abc, ...rest } = this.props

    return (
      <div>
        {/* <MyTitle
          title={`${this.state.mainTitle} (${this.state.subTitle})`}
          author={this.state.author}
        ></MyTitle> */}

        <div>
          {/* {title} */}

          {/* {
            titleShow === 'sub'
              ? <h2>{subTitle}</h2>
              : (
                titleShow === 'main'
                  ? <h1>{mainTitle}</h1>
                  : <small>not title</small>
              )
          } */}

          {/* 下面这种传参是 字符串字面量赋值 */}
          {/* <MyTitle
            title="这是一个标题"
            author="alex"
          >
          </MyTitle> */}

          {/* 表达式方式 */}
          {/* <MyTitle
            title={'这是一个小标题'}
            author={'alex'}
          >
          </MyTitle> */}

          {/* 表达式中嵌套HTML实体字符,会被转义成普通字符 */}
          {/* <MyTitle
            title='我是你们的爹'
            author={'&lt;alex&gt;'}
          >
          </MyTitle> */}

          {/* <MyTitle
            // 字符串字面量传入props的方式不会对HTML实体字体转义
            title="&lt;Hello Title&gt;"
            author={'<Alex>'}
          >
          </MyTitle> */}

          <MyTitle
            // title='this is a title'
            // author="alex"

            // 字符串传入的意义是字符串的意思，但是不代表Boolean真假，应该写成表达式
            // authorShow="true"
            // authorShow={false}

            // 不赋值属性，默认就是Boolean true 但不推荐这么做，语义不好，类似ES6省略属性，(authorShow) => {authorShow: authorShow}
            // authorShow

            // 语义不一样，一个是字符串，一个是数字
            // a="1"
            // a={1}

            // 属性展开操作, 属性少其实没有必要使用这种传参形式，语义化不好
            // title={title}
            // author={author}
            // authorShow={authorShow}
            // 相当于上面的写法
            // {...this.props}
            {...rest}
          >

          </MyTitle>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App
    title='this is a title'
    author='alex'
    authorShow={true}
    abc="1"
  >this is children title</App>,
  document.getElementById('app')
)