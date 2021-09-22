import { useState } from 'react'
import Editor from '@monaco-editor/react'

const files = {
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: '<h1>Hello, World</h1>',
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: 'h1 { color: white; }',
  },
  'app.js': {
    name: 'app.js',
    language: 'javascript',
    value: `console.log('Hello, World')`,
  },
}

export function App() {
  const [fileName, setFileName] = useState<string>('index.html')
  const { name, language, value } = files[fileName]

  return (
    <>
      <button
        disabled={fileName === 'index.html'}
        onClick={() => setFileName('index.html')}
      >
        index.html
      </button>
      <button
        disabled={fileName === 'style.css'}
        onClick={() => setFileName('style.css')}
      >
        style.css
      </button>
      <button
        disabled={fileName === 'app.js'}
        onClick={() => setFileName('app.js')}
      >
        app.js
      </button>
      <Editor
        height="100vh"
        path={name}
        defaultLanguage={language}
        defaultValue={value}
        theme="vs-dark"
        options={{
          fontFamily: 'IBM Plex Mono, sans-serif',
          fontSize: 18,
        }}
      />
    </>
  )
}
