function MyTitle(props) {
  return (
    <h1>
      {props.children}
    </h1>
  )
}

class MyList extends React.Component {
  render() {
    return (
      <div className={this.props.listClassName}>
        <h1>{this.props.title}</h1>
        <ul className="my-list">
          {this.props.children}
        </ul>
      </div>
    )
  }
}

/* class ListItem extends React.Component {
  render() {
    return (
      <li>{this.props.children}</li>
    )
  }
} */

class ListItems extends React.Component {
  render() {
    // 注意：返回的是一个数组
    /* return [
      <li key="1">this is content 1</li>,
      <li key="2">this is content 2</li>,
      <li key="3">this is content 3</li>
    ] */

    return this.props.listData.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })
  }
}

// class App extends React.Component {
//   state = {
//     listData: [
//       'this is my content 1',
//       'this is my content 2',
//       'this is my content 3',
//       'this is my content 4',
//       'this is my content 5'
//     ]
//   }
//   render() {
//     return (
//       <div>
//         {/* 
//             JSX子元素
//             字符串字面量 不转义字符实体
//               1 会自动去除首尾空格
//               2 换行也会去掉
//               3 字符串之间有多个空格，会压缩成一个空格,如果一定要多个空格，可以使用(&nbsp;)
//               4 如果要空格换行，应该使用 <br />
//          */}
//         {/* <MyTitle>
//           THIS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IS <br /> A TITLE
//         </MyTitle> */}

//         {/* <MyTitle>
//           {'this is a <title>'}
//         </MyTitle> */}

//         {/* JSX作为JSX子元素 */}
//         <MyList
//           listClassName="my-list-container"
//           title="THIS IS MY LIST"
//         >
//           {/* {
//             this.state.listData.map((item, index) => {
//               return (
//                 <ListItem key={index}>HI! {item}</ListItem>
//               )
//             })
//           } */}
//           <ListItems listData={this.state.listData}></ListItems>
//         </MyList>

//       </div>
//     )
//   }
// }

class App extends React.Component {
  state = {
    show: true,
    data: [1]
  }
  render() {
    return (
      <div>
        {/* 
          null、undefined、boolean 都可以作为jsx的子元素，但是它们会被忽略，不会渲染
          JSX为什么不渲染呢？因为是它是为了解决条件渲染的问题，如果非要渲染，可以在前面加一个String()
          标签是会渲染的
        */}

        <div>{true}</div>
        <div>{false}</div>
        <div>{undefined}</div>
        <div>{null}</div>
        <div>{String(undefined)}</div>

        <div>
          {this.state.show ? 'true' : 'false'}
        </div>

        <div>
          {
            !this.state.show || 'fuck you'
          }
        </div>

        <div>
          {/* {this.state.data.length ? '有数据' : '无数据'} */}
        </div>

        <div>
          {
            // 在jsx中，这个条件的 0 是会渲染的
            // this.state.data.length && '有数据'
            // !!this.state.data.length && '有数据'
            this.state.data.length > 0 && '有数据'
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)