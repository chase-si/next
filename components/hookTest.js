import { useState, useEffect, useRef } from 'react'

export const TestComponents = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(5)
  }) 


  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>
        click to add number
      </button>
    </div>
  )
}