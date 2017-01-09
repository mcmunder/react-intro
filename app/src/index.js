import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContainer from './containers/AppContainer/AppContainer'
import reducer from './store/reducer'
import './index.css'

const store = createStore(reducer, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
