import { ChildrenProps } from './types'

export function Wrapper({ children }: ChildrenProps) {
  return <main className="grid h-screen grid-cols-layout">{children}</main>
}
