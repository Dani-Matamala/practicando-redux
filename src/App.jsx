import './App.css'
import { Counter } from './Counter'
import store from './store.js'
import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
  )
}

export default App
