import { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'

import type { OnChange, OnMount } from '@monaco-editor/react'

interface EditorProps {
  handleEditorChange: OnChange
  handleEditorDidMount: OnMount
}

type Files = keyof typeof files

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

export function Editor({
  handleEditorChange,
  handleEditorDidMount,
}: EditorProps) {
  const [fileName, setFileName] = useState<Files>('index.html')
  const { name, language, value } = files[fileName]

  return (
    <>
      <div className="border-b border-gray-800">
        <button
          className="px-5 py-2 bg-gray-800 border-b-2 border-blue-600"
          disabled={fileName === 'index.html'}
          onClick={() => setFileName('index.html')}
        >
          index.html
        </button>
        <button
          className="px-5 py-2 border-r border-gray-800"
          disabled={fileName === 'style.css'}
          onClick={() => setFileName('style.css')}
        >
          style.css
        </button>
        <button
          className="px-5 py-2 border-r border-gray-800"
          disabled={fileName === 'app.js'}
          onClick={() => setFileName('app.js')}
        >
          app.js
        </button>
      </div>
      <MonacoEditor
        defaultLanguage={language}
        defaultValue={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        path={name}
        theme="vs-dark"
        options={{
          fontFamily: 'IBM Plex Mono, sans-serif',
          fontSize: 16,
          tabSize: 2,
          minimap: {
            enabled: false,
          },
        }}
      />
    </>
  )
}
