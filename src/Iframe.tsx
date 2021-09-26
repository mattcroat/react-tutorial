import { useEffect, useRef } from 'react'

interface IframeProps {
  value: string | undefined
  language: string
}

export function Iframe({ value, language }: IframeProps) {
  const iframeEl = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeEl.current?.contentWindow
    if (!iframe) return

    if (language === 'css') {
      iframe.postMessage({ type: 'css', value }, '*')
    }

    if (language === 'html') {
      iframe.postMessage({ type: 'html', value }, '*')
    }

    if (language === 'javascript') {
      iframe.postMessage({ type: 'javascript', value }, '*')
    }
  }, [value])

  return (
    <iframe
      ref={iframeEl}
      className="w-full h-full"
      srcDoc={`
      <html>
        <head>
          <style>
            body {
              font-family: 'Inter', sans-serif;
              color: white;
            }

            h1 {
              font-weight: 300;
            }
          </style>
          <script src="https://unpkg.com/react@17/umd/react.development.js" defer></script>
          <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" defer></script>
          <script src="https://unpkg.com/@babel/standalone@7.15.7/babel.min.js" defer></script>
          <script type="module">
            function handleMessage(event) {
              const { type, value } = event.data;
              
              if (type === 'css') {
                document.querySelector('style').innerHTML = value
              }
              
              if (type === 'html') {
                document.body.innerHTML = value;
              }

              if (type === 'javascript') {
                document.querySelector('#script').innerHTML = value
                const options = { presets: ['es2015-loose', 'react'] }
                const { code } = Babel.transform(value, options)
                eval(code)
              }
            }
            
            window.addEventListener('message', handleMessage, false);
          </script>
          <script id="script" type="module">
          </script>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
     `}
    />
  )
}
