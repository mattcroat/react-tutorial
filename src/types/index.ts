import type { OnChange, OnMount } from '@monaco-editor/react'

type OnChangeType = Parameters<OnChange>
type OnMountType = Parameters<OnMount>

export type ValueType = OnChangeType[0]
export type EventType = OnChangeType[1]
export type MonacoEditorType = OnMountType[0]
export type MonacoInstanceType = OnMountType[1]
export type LanguageType = string

export interface FileType {
  [key: string]: {
    name: string
    language: string
    value: string
  }
}

export interface ContentType {
  value: ValueType
  language: LanguageType
}

export interface EditorProps {
  handleEditorChange: (
    value: ValueType,
    event: EventType,
    language: LanguageType
  ) => void
  handleEditorDidMount: (
    monacoEditor: MonacoEditorType,
    monacoInstance: MonacoInstanceType
  ) => void
}

export interface IframeProps {
  value: string | undefined
  language: string
}

export interface FileProps {
  fileName: string
  setFileName: React.Dispatch<React.SetStateAction<string>>
  name: string
}

export interface ChildrenProps {
  children: React.ReactNode
}
