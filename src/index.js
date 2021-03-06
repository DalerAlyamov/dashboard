import React from 'react'
import ReactDOM from 'react-dom'
import './global.sass'
import App from './App'
import store from './redux/reducers' 
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
