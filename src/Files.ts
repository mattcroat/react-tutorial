const cssCode = `
h1 {
  color: white;
}`.trim()

const htmlCode = `
<div id="app"></div>
`.trim()

const javaScriptCode = `
import React, { useState } from 'https://cdn.skypack.dev/react'
import { render } from 'https://cdn.skypack.dev/react-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

render(<App />, document.getElementById('app'))
`.trim()

export const files = {
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: htmlCode,
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: cssCode,
  },
  'app.jsx': {
    name: 'app.jsx',
    language: 'javascript',
    value: javaScriptCode,
  },
}
