import { useSelector, useDispatch } from 'react-redux'
import { ADD_ONE, MINUS_ONE } from './actions'

// ...

const Counter = () => {
  const number = useSelector(state => state.number)
  const dispatch = useDispatch()

  const handleAddOne = () => {
    dispatch({ type: ADD_ONE })
  }

  const handleMinusOne = () => {
    dispatch({ type: MINUS_ONE })
  }

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={handleAddOne}>Add One</button>
      <button onClick={handleMinusOne}>Minus One</button>
    </div>
  )
}

export default Counter
