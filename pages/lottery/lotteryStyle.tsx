import styled from 'styled-components'

export const LotteryContainer = styled.div`
  background-color: #eee;
  display: flex;
`

export const ItemContainer = styled.div`
  width: 50px;
  height: 50px;
  border: solid 1px #fff;
  margin-left: 10px;
  &.active {
    border: solid 1px #000;
  }
`