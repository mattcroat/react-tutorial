import { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'

import { File } from './File'
import { files } from './Files'
import type { EditorProps } from './types'

export function Editor({
  handleEditorChange,
  handleEditorDidMount,
}: EditorProps) {
  const [fileName, setFileName] = useState<string>('app.jsx')
  const { name, language, value } = files[fileName]

  return (
    <>
      <div className="border-b border-gray-800">
        <File fileName={'app.jsx'} name={name} setFileName={setFileName} />
        <File fileName={'index.html'} name={name} setFileName={setFileName} />
        <File fileName={'style.css'} name={name} setFileName={setFileName} />
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
