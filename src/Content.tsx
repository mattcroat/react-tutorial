import { Chapters } from './Chapters'

export function Content() {
  return (
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
          <strong>component-based</strong> library for building user interfaces.
        </p>
      </div>
    </section>
  )
}
