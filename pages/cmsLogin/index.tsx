import React from 'react'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
import { observer  } from 'mobx-react'

import { LoginContainer } from './loginStyle'
import { ItemContainer } from '../lottery/lotteryStyle'

export interface LoginProps {
  testProps?: string
}

export interface LoginState {
  userName: string,
  password: string,
}

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
    const x = await fetch('https://webcdn.17app.co/campaign/pretest/data.json')
    this.testData = await x.json()
  }

  componentDidUpdate() {
    console.log(this.testData)
  }

  render() {
    return (
      <LoginContainer>
        <div className="form">
          <input type="text" />
          <input type="text"/>
          <button>登录</button>
          {this.testData.length > 0 && this.testData.map(item => (
            <div>{item.displayName}</div>
            ))}
        </div>
      </LoginContainer>
    )
  }
}