import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

  // 构造函数优于任何函数先执行
  constructor (props) {
    super(props);
    // 组件的状态
    this.state = {
      inputValue: '',
      list: []
    }
    // this指向问题
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 渲染组件
  render () {
    // JSX
    return (
      <Fragment>
        <div>
          <label htmlFor={'insertArea'}>输入内容：</label>
          {/*下面是一个input框*/}
          <input
            id={'insertArea'}
            type="text"
            className={'input'}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button className={'button'} onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  // 渲染列表
  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  // 输入事件
  handleInputChange (e) {
    // 改变model数据使用该方法
    // this.setState({
    //   inputValue: e.target.value
    // })

    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
    }))
  }

  // 点击事件
  handleBtnClick () {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  // 删除
  handleItemDelete (index) {
    // immutabel: state不允许我们做任何的改变

    // const list = [...this.state.list];
    // list.splice(index, 1);
    //
    // this.setState({
    //   list: list
    // })

    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })

  }
}

export default TodoList
