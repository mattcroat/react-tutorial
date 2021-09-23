import { useRef } from 'react'
import { Editor } from './Editor'

export function App() {
  const iframeElement = useRef<HTMLIFrameElement>(null)

  function handleEditorChange(value: string) {
    iframeElement.current?.contentWindow.postMessage(
      { type: 'html', message: value },
      '*'
    )
  }

  return (
    <main className="grid grid-cols-layout h-screen">
      <section className="space-y-8 p-8 border-r border-gray-900">
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
        <div className="h-1/2 overflow-hidden">
          <Editor handleEditorChange={handleEditorChange} />
        </div>
        <div className="h-1/2 p-4 border-t border-gray-900 bg-gray-700">
          <iframe
            ref={iframeElement}
            className="w-full h-full"
            srcDoc="
              <html>
                <head>
                  <style>
                    body {
                      font-family: 'Inter', sans-serif;
                      color: white;
                    }
                  </style>
                </head>
                <body>
                </body>
                <script>
                  function handleMessage(event) {
                    const { type, message } = event.data;
                    if (type === 'html') {
                      document.body.innerHTML = message
                    }
                  }
                  window.addEventListener('message', handleMessage, false)
                </script>
              </html>
            "
          />
        </div>
      </section>
    </main>
  )
}
