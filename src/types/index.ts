import { files } from '../Files'

export type ValueType = string | undefined

type EventType = any
type LanguageType = string

export type EditorType = (monacoEditor: any, monacoInstance: any) => void

export type EditorChangeType = (
  value: ValueType,
  event: EventType,
  language: LanguageType
) => void

export interface ContentType {
  value: ValueType
  language: string
}

export type FileType = keyof typeof files
