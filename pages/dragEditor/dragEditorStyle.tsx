import styled from 'styled-components'
import { rem } from '../../utils/sytles'

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  .iconContainer {
    width: 100%;
    display: flex;

    .icon {
      width: ${rem(37)};
      height: ${rem(32)};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #f1f1f1;
      border-radius: 2px;
    }
  }
`

const TextBox = styled.div`
  width: ${rem(480)};
  height: ${rem(540)};
  border: 0.5px solid #B0BEC5;
  overflow: scroll;
`

export { EditorContainer, TextBox }