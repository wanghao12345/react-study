import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'

class TodoList extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // store里面的数据发生变化后，就会触发
    store.subscribe(this.handleStoreChange)
  }


  render () {
    return (
      <div style={{margin: '10px'}}>
        <div>
          <Input
            placeholder = 'todo info'
            style={{width: '300px', marginRight: '10px'}}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }

  // 输入改变事件
  handleInputChange (e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  // 刷新store变化后的数据
  handleStoreChange () {
    this.setState(store.getState())
  }

  // 提交
  handleBtnClick () {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  // 删除
  handleItemDelete (index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
}

export default TodoList
