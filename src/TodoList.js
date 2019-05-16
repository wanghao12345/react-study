import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'

const data = [
  'Racing car into crowd.',
  'Japanese wed commoner.',
  'Australian after outback crash.',
  'Man charged wedding girl.',
  'Los Angeles huge wildfires.',
];

class TodoList extends Component {

  constructor (props) {
    super(props);
    this.store = store.getState()
    console.log(this.store)
  }


  render () {
    return (
      <div style={{margin: '10px'}}>
        <div>
          <Input placeholder = 'todo info' style={{width: '300px', marginRight: '10px'}} />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.store.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

}

export default TodoList
