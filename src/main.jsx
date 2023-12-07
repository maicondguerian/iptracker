import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={GlobalStyles}>
        <App />
      </ThemeProvider>
    </Provider>
  </>,
)
