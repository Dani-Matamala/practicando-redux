
import {useSelector, useDispatch} from 'react-redux'
const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

const addOne = () => {
  this.props.dispatch({ type: 'ADD_ONE' });
}
const minusOne = () => {
  this.props.dispatch({ type: 'MINUS_ONE' });
}

export const Counter = () => {

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{number}</h1> */}
        <div style={containerStyle}>
          <button onClick={addOne} type="button" style={buttonStyle}>
            -
          </button>
          <button onClick={minusOne} type="button" style={buttonStyle}>
            +
          </button>
        </div>
      </header>
    </div>
  )
}

export default connect(mapStateToProps)(Counter);