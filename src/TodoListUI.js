import React from 'react'
import {Button, Input, List} from "antd"

/**
 * 无状态组件
 *
 * 含义：一个只含有render函数的组件，被称为无状态组件，无状态组件可以通过一个函数表示
 *
 * 优点：函数的性能比一般的组件都要高得多
 *
 */
const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <div>
        <Input
          placeholder = 'todo info'
          style={{width: '300px', marginRight: '10px'}}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >提交</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}




// class TodoListUI extends Component{
//   render() {
//     return (
//       <div style={{margin: '10px'}}>
//         <div>
//           <Input
//             placeholder = 'todo info'
//             style={{width: '300px', marginRight: '10px'}}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button
//             type="primary"
//             onClick={this.props.handleBtnClick}
//           >提交</Button>
//         </div>
//         <List
//           style={{marginTop: '10px', width: '300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI
