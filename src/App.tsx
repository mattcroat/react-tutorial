import { useState } from 'react'

import { Chapters } from './Chapters'
import { Editor } from './Editor'
import { Iframe } from './Iframe'

import type { OnChange, OnMount } from '@monaco-editor/react'

export function App() {
  const [html, setHtml] = useState<string>('')

  const handleEditorChange: OnChange = (value) => {
    if (!value) return
    setHtml(value)
  }

  const handleEditorDidMount: OnMount = (editor) => {
    const value = editor.getValue()
    setHtml(value)
  }

  return (
    <main className="grid h-screen grid-cols-layout">
      <section className="p-8 space-y-8 bg-gray-800 border-r border-gray-700">
        <div>
          <Chapters />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="text-gray-400">
            Welcome to the <strong>React tutorial</strong>. This will teach you
            everything you need to know to build <strong>React</strong>{' '}
            applications.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What is React?</h2>
          <p className="text-gray-400">
            React is a <strong>declarative</strong>,{' '}
            <strong>component-based</strong> library for building user
            interfaces.
          </p>
        </div>
      </section>
      <section>
        <div className="overflow-hidden bg-gray-900 border-b border-gray-700 h-1/2">
          <Editor
            handleEditorChange={handleEditorChange}
            handleEditorDidMount={handleEditorDidMount}
          />
        </div>
        <div className="p-4 bg-gray-900 border-t border-gray-700 h-1/2">
          <Iframe html={html} />
        </div>
      </section>
    </main>
  )
}
