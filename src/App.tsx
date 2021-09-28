import { useState } from 'react'

import { Chapters } from './Chapters'
import { Editor } from './Editor'
import { Iframe } from './Iframe'

import type { ContentType, EditorType, EditorChangeType } from './types'

export function App() {
  const [content, setContent] = useState<ContentType>({
    value: '',
    language: '',
  })
  const { value, language } = content

  const highlightJSX: EditorType = async (monacoEditor, monacoInstance) => {
    const { default: traverse } = await import('@babel/traverse')
    const { parse } = await import('@babel/parser')
    const { default: MonacoJSXHighlighter } = await import(
      'monaco-jsx-highlighter'
    )

    const babelParse = (code: string) =>
      parse(code, { sourceType: 'module', plugins: ['jsx'] })

    const monacoJSXHighlighter = new MonacoJSXHighlighter(
      monacoInstance,
      babelParse,
      traverse,
      monacoEditor
    )

    monacoJSXHighlighter.highLightOnDidChangeModelContent()
    monacoJSXHighlighter.addJSXCommentCommand()
  }

  const handleEditorChange: EditorChangeType = (value, _event, language) => {
    setContent({ value, language })
  }

  const handleEditorDidMount: EditorType = async (
    monacoEditor,
    monacoInstance
  ) => {
    const value = monacoEditor.getValue()
    setContent({ value, language: 'javascript' })
    highlightJSX(monacoEditor, monacoInstance)
  }

  return (
    <main className="grid h-screen grid-cols-layout">
      <section className="px-8 pt-2 space-y-8 bg-gray-800 border-r border-gray-700/40">
        <h1 className="pb-1 text-2xl border-b border-gray-700/40">
          Introduction
        </h1>
        <div>
          <Chapters />
        </div>
        <div className="space-y-4">
          <p>
            Welcome to the <strong>React tutorial</strong>. This will teach you
            everything you need to know to build <strong>React</strong>{' '}
            applications.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">What is React?</h2>
          <p>
            React is a <strong>declarative</strong>,{' '}
            <strong>component-based</strong> library for building user
            interfaces.
          </p>
        </div>
      </section>
      <section>
        <div className="overflow-hidden border-b border-gray-800 bg-dark h-1/2">
          <Editor
            handleEditorChange={handleEditorChange}
            handleEditorDidMount={handleEditorDidMount}
          />
        </div>
        <div className="p-4 border-t border-gray-800 bg-dark h-1/2">
          <Iframe value={value} language={language} />
        </div>
      </section>
    </main>
  )
}
