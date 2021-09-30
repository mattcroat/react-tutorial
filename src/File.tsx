import type { FileProps } from './types'

export function File({ fileName, setFileName, name }: FileProps) {
  const classes =
    fileName === name
      ? 'px-5 py-2 bg-gray-700 border-b-2 border-blue-600'
      : 'px-5 py-2 bg-gray-800'

  return (
    <button className={classes} onClick={() => setFileName(fileName)}>
      {fileName}
    </button>
  )
}
