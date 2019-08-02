import { useState } from 'react'
import { SelectContainer } from './selectStyle'

const arr = [1, 2, 3, 4]

export const Select = () => {
  const [select, setSelect] = useState(3)

  const handleOnClick = item => {
    setSelect(item)
  }

  return (
    <SelectContainer>
      {arr.find(item => item === select && 
        <div 
          key={item} 
          className="option"
          onClick={() => handleOnClick(item)}
        >
          {item}
        </div>
      )}
      <div className="dropDown">
        {arr.filter(item => item !== select).map(item =>
          <div key={item} className="option" onClick={() => handleOnClick(item)}>
            {item}
          </div>
        )}
      </div>
    </SelectContainer>
  )
}