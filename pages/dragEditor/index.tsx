import React from 'react'
import PropTypes from 'prop-types'

import { EditorContainer, TextBox } from './dragEditorStyle'
import { ICONS } from './dragEditorConstants'

export interface EditorProps {
  iconConfig: Array<string>,
  testProps?: string
}

export interface EditorState {
  itemArray: Array<any>,
  activeKey: number
}

export interface item {
  title: string;
  imgSrc: string;
  format: string;
}

function pluck(key: string, obj: any):item {
  return obj[key]
}

export default class dragEditor extends React.Component<EditorProps, EditorState> {
  static propTypes={
    onClick: PropTypes.func,
    iconConfig: PropTypes.array
  }

  static defaultProps = {
    onClick: () => {},
    iconConfig: ['underline', 'bold', 'italic', 'superScript', 'subScript', 'Left', 'undo', 'redo', 'link', 'unlink']
  }

  private textBox: React.RefObject<HTMLDivElement>

  constructor(props: EditorProps) {
    super(props)
    this.textBox = React.createRef()
    this.state = {
      itemArray: [1, 2, 3, '中奖', 5],
      activeKey: 0
    }
  }

  handleIconClick = (value: string, defaultFormat?: boolean) => {
    if (!defaultFormat) {
      console.log('default')
      document.execCommand(value, false)
      this.textBox.current && this.textBox.current.focus()
    } else {
      console.log('undefault')
    }
  }
  
  render() {
    return (
      <EditorContainer>
        <div className="iconContainer">
          {this.props.iconConfig.map((icon, index) => 
            pluck(icon, ICONS) && (
              <div className="icon" key={`${index}-${pluck(icon, ICONS).title}`}>
                <img 
                  src={pluck(icon, ICONS).imgSrc}
                  title={pluck(icon, ICONS).title}
                  onClick={() => this.handleIconClick(pluck(icon, ICONS).format)}
                />
              </div>
            ))}
        </div>

        <TextBox
          ref={this.textBox}
          suppressContentEditableWarning={true}
          contentEditable={true}
          onKeyUp={() => console.log(this.textBox) }
        >
          edit Box
        </TextBox>
      </EditorContainer>
    )
  }
}