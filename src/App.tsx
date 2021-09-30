import { useState } from 'react'

import { Content } from './Content'
import { Editor } from './Editor'
import { Iframe } from './Iframe'
import { Wrapper } from './Wrapper'

import type {
  ContentType,
  MonacoEditorType,
  MonacoInstanceType,
  ValueType,
  EventType,
  LanguageType,
} from './types'

export function App() {
  const [content, setContent] = useState<ContentType>({
    value: '',
    language: '',
  })
  const { value, language } = content

  async function highlightJSX(
    monacoEditor: MonacoEditorType,
    monacoInstance: MonacoInstanceType
  ) {
    const { default: traverse } = await import('@babel/traverse')
    const { parse } = await import('@babel/parser')
    const { default: MonacoJSXHighlighter } = await import(
      'monaco-jsx-highlighter'
    )

    function babelParse(code: string) {
      return parse(code, { sourceType: 'module', plugins: ['jsx'] })
    }

    const monacoJSXHighlighter = new MonacoJSXHighlighter(
      monacoInstance,
      babelParse,
      traverse,
      monacoEditor
    )

    monacoJSXHighlighter.highLightOnDidChangeModelContent()
    monacoJSXHighlighter.addJSXCommentCommand()
  }

  async function handleEditorDidMount(
    monacoEditor: MonacoEditorType,
    monacoInstance: MonacoInstanceType
  ) {
    const value = monacoEditor.getValue()
    setContent({ value, language: 'javascript' })
    highlightJSX(monacoEditor, monacoInstance)
  }

  function handleEditorChange(
    value: ValueType,
    _event: EventType,
    language: LanguageType
  ) {
    setContent({ value, language })
  }

  return (
    <Wrapper>
      <Content />
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
    </Wrapper>
  )
}
