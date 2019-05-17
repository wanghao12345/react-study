import React, {Component} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
class TodoList extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // store里面的数据发生变化后，就会触发
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount () {
    axios.get('/list.json').then((result) => {
      console.log(result);
    })
  }


  // 输入改变事件
  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  // 刷新store变化后的数据
  handleStoreChange () {
    this.setState(store.getState())
  }

  // 提交
  handleBtnClick () {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  // 删除
  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
