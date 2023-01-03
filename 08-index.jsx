// 列表渲染
// JSX 中推荐使用map方法进行遍历

import { nanoid } from 'nanoid'
// class App extends React.Component {
//   state = {
//     users: [
//       {
//         id: 1,
//         name: '张三'
//       },
//       {
//         id: 2,
//         name: '李四'
//       },
//       {
//         id: 3,
//         name: '王五'
//       },
//       {
//         id: 4,
//         name: 'xiaoming'
//       },
//       {
//         id: 5,
//         name: 'xiaohong'
//       }
//     ]
//   }

//   render() {
//     return (
//       <div>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>KEY</th>
//               <th>ID</th>
//               <th>名字</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               this.state.users.map(item => {
//                 const key = nanoid();
//                 console.log("key: ", key)
//                 return (
//                   <tr key={key}>
//                     <td>{key}</td>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

/* 
  列表中的每个子元素必须有一个唯一的key值
  key是React查看元素是否改变的一个唯一标识
  key必须在兄弟节点中唯一，确定的（兄弟节点是一个列表中的兄弟元素）

  不建议使用index使用key值的原因：
    这个不建议建立在列表顺序改变、元素增删的情况下（禁止）
    列表项顺序改变了，index的对应项就会改变，key值对应的项还是之前列表情况的对应元素的值
    这个时候会导致arr混乱，查找元素性能变差。
    
  好的做法：
    如果列表是静态不可操作的，可以选择index作为key，也不推荐，因为这个列表在以后维护拓展的时候，有可能会变更为可操作列表
    1 尽量避免使用index
    2 可以用数据的id（很有可能ID会变动）
    3 最好的选择，使用动态生成一个静态ID，例如使用nanoid
*/

// 使用key赋值的正确姿势
class ItemTitle extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>KEY</th>
          <th>ID</th>
          <th>NAME</th>
        </tr>
      </thead>
    )
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { sid, item } = this.props
    return (
      <tr>
        <td>{sid}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
      </tr>
    )
  }
}

class ListTable extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: '张三'
      },
      {
        id: 2,
        name: '李四'
      },
      {
        id: 3,
        name: '王五'
      },
      {
        id: 4,
        name: 'xiaoming'
      },
      {
        id: 5,
        name: 'xiaohong'
      }
    ]
  }

  render() {
    return (
      <table border="1">
        <ItemTitle></ItemTitle>
        <tbody>
          {
            this.state.users.map(item => {
              const sid = nanoid()
              // key是不会作为属性传递给子组件的，必须显示传递key值，不能用key作为属性名
              // 防止开发者在逻辑中对key值进行操作
              return (
                <ListItem item={item} sid={sid} key={sid}></ListItem>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}


ReactDOM.render(
  <ListTable></ListTable>,
  document.getElementById('app')
)