import React from 'react'
import PropTypes from 'prop-types'

import { LotteryContainer, ItemContainer } from './lotteryStyle'

//next 找typescript相关编译依赖 @zeit/next-typescript
//style-components 找@types/styled-components相关依赖
//@types/react @types/react-dom z在typescript 相关 react下寻找依赖

export interface LotteryProps {
  ItemContainer: any,
  LotteryContainer: any,
  testProps?: string
}

export interface LotteryState {
  itemArray: Array<any>,
  activeKey: number
}

export default class Lottery extends React.Component<LotteryProps, LotteryState> {
  static propTypes = {
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  constructor(props: LotteryProps) {
    super(props);
    this.state = {
      itemArray: [1, 2, 3, '中奖', 5],
      activeKey: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        activeKey: prevState.activeKey + 1   
      }))    
    }, 2000)
  }


  _renderItem = (value: string | number, index: number) => {
    return (
      <ItemContainer 
        key={index}  
        className={index === this.state.activeKey ? 'active' : ''}
      >
        {value}
      </ItemContainer>
    )
  }

  render() {
    return (
      <LotteryContainer>
        {this.state.itemArray.map((item, index) => 
          this._renderItem(item, index)
        )}
      </LotteryContainer>
    )
  }
}