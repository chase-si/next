import styled from 'styled-components'

export const SelectContainer = styled.div`
  background-color: #eee;
  width: 200px;
  .option {
    &.active, :hover {
      background: #666;
    }
  }
  .dropDown {
    display: none;
  }
  &:hover {
    .dropDown {
      display: block;
    }
  }
`
