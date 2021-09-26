const cssCode = `
h1 {
  color: white;
}`.trim()

const htmlCode = `
<div id="app"></div>
`.trim()

const javaScriptCode = `
function App() {
  return <h1>Hello, World</h1>
}

ReactDOM.render(<App />, document.getElementById('app'))
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
