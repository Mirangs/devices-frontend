import React from 'react'
import ReactDOM from 'react-dom'
import Style from './index.style'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Style />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
