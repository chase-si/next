import React, { useReducer } from 'react'

import { HomePage } from './containers/homePage'
import { Select } from '../components/select'

const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case '+':
      return {
        ...state,
        count: state.count + 1
      };
    case '-':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const App = () => {
  const [states, dispatch] = useReducer(
    reducer, {
      count: 1,
      test: 2
    }
  )
  return (
    <div >
      <div>{states.count}</div>
      <div onClick={() => dispatch({type: '+'})}>-</div>
      <div>+</div>
      <ChildCount count={states.count} />
      <ChildTest test={states.test} />
    </div>
  )
}

const ChildCount = ({ count }) => {
  console.log('rending count children')
  return (
    <div>count: {count}</div>
  ) 
}

const ChildTest = ({ test }) => {
  console.log('rending test children')
  return (
    <div>test: {test}</div>
  ) 
} 

export default App
