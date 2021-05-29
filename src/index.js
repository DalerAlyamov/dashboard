import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import store from './redux/reducers' 
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={mode}>
    <App />
  </Provider>,
  document.getElementById('root')
)
