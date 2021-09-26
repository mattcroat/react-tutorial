import { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'

import { files } from './Files'

interface EditorProps {
  handleEditorChange: (
    value: string | undefined,
    event: any,
    language: string
  ) => void
  handleEditorDidMount: (editor: any) => void
}

export function Editor({
  handleEditorChange,
  handleEditorDidMount,
}: EditorProps) {
  const [fileName, setFileName] = useState<keyof typeof files>('app.jsx')
  const { name, language, value } = files[fileName]

  function selected(file: string) {
    return fileName === file
      ? 'px-5 py-2 bg-gray-700 border-b-2 border-blue-600'
      : 'px-5 py-2 bg-gray-800'
  }

  return (
    <>
      <div className="border-b border-gray-800">
        <button
          className={selected('app.jsx')}
          onClick={() => setFileName('app.jsx')}
        >
          app.jsx
        </button>
        <button
          className={selected('index.html')}
          onClick={() => setFileName('index.html')}
        >
          index.html
        </button>
        <button
          className={selected('style.css')}
          onClick={() => setFileName('style.css')}
        >
          style.css
        </button>
      </div>
      <MonacoEditor
        defaultLanguage={language}
        defaultValue={value}
        onChange={(value, event) => handleEditorChange(value, event, language)}
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
