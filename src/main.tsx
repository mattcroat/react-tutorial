import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import './styles/tailwind.css'
import './styles/jsx.css'

// Babel expects these properties on `window`
window.Buffer = ''
window.process = {
  env: {
    NODE_ENV: 'development',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
