import React from 'react'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
import { observer, inject  } from 'mobx-react'

import { LoginContainer } from './loginStyle'
import { Request } from '../../lib/api/request'

export interface LoginProps {
  testProps?: string
}

export interface LoginState {
  userName: string,
  password: string,
}

@inject('authStore')

@observer 
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

  @observable testData = [];

  componentDidMount() {
    this.getAPI()
  }

  getAPI = async () => {
    // const x = await fetch('https://webcdn.17app.co/campaign/pretest/data.json')
    // this.testData = await x.json()
    // const x = await Request.get('/')
    console.log(123)
  }

  // componentDidUpdate() {
  //   console.log(this.testData)
  // }

  render() {
    return (
      <LoginContainer>
        <div className="form">
          <input type="text" />
          <input type="text"/>
          <button>登录</button>
          {/* {this.testData.length > 0 && this.testData.map(item => (
            <div>{item.displayName}</div>
          ))} */}
        </div>
      </LoginContainer>
    )
  }
}