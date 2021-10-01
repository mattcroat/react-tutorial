import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

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
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
