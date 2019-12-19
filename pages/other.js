import React from 'react'
import axios from 'axios'


export default class Counter extends React.Component {
  state = { data: 123 }

  componentDidMount() {
    const client = axios.create({ baseURL: 'http://47.100.175.176:3000' })
    // 自定义 axios 实例


    client.get('/login') // 第一次请求失败，第二次成功
      .then(result => {
        this.setState({data: result.data}) // 'ok'
      })
      .catch(err => {
        console.dir(err)
      })
  }

  render () {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}
