import React from 'react'
import PropTypes from 'prop-types'

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
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  render() {
    return (
      <LoginContainer>
        <div className="form">
          <input type="text" />
          <input type="text"/>
          <button>登录</button>
        </div>
      </LoginContainer>
    )
  }
}