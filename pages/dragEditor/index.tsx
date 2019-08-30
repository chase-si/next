import React from 'react'
import PropTypes from 'prop-types'

import { EditorContainer } from './dragEditor'


export interface LotteryProps {
  ItemContainer: any,
  LotteryContainer: any,
  testProps?: string
}

export interface LotteryState {
  itemArray: Array<any>,
  activeKey: number
}

export default class dragEditor extends React.Component<LotteryProps, LotteryState> {
  static propTypes = {
    onClick: PropTypes.func,
    editor: PropTypes.node
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

  getEditorInnerHtml = () => {
    console.log(this.editor.innertHtml)
  }

  render() {
    return (
      <EditorContainer>
        <div
          ref={editor => this.editor = editor} 
          contenteditable="true" 
          onKeyUp={() => console.log(123)}
          onFocus={() => console.log(this)}
        >
          test
        </div>
        drag
      </EditorContainer>
    )
  }
}