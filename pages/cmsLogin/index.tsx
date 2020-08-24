import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { LoginContainer } from './loginStyle'

export interface LoginProps {
  testProps?: string
}

export interface LoginState {
  userName: string,
  password: string,
}

export default class Lottery extends React.Component<LoginProps, LoginState> {
  static propTypes = {
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  constructor(props: LoginProps) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleOnchange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(123)
    axios.post('http://47.100.175.176:3001/login', {
      firstName: this.state.userName,
      lastName: this.state.password
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <LoginContainer>
        <div className="form">
          <input name="userName" type="text" onChange={this.handleOnchange} />
          <input name="password" type="password" onChange={this.handleOnchange} />
          <button onClick={this.handleSubmit}>登录</button>
        </div>
      </LoginContainer>
    )
  }
}