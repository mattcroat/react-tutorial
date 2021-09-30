import { useEffect, useRef } from 'react'
import type { IframeProps } from './types'

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
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

            body {
              font-family: 'Inter', sans-serif;
              font-weight: 300;
              color: white;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-weight: 300;
            }
          </style>
          <style id="styles">
          </style>
          <script src="https://unpkg.com/@babel/standalone@7.15.7/babel.min.js" defer></script>
          <script>
            function handleMessage(event) {
              const { type, value } = event.data;
              
              if (type === 'css') {
                document.querySelector('#styles').innerHTML = value;
              }
              
              if (type === 'html') {
                document.body.innerHTML = value;
              }

              if (type === 'javascript') {
                const options = { presets: ['react'] };
                const { code } = Babel.transform(value, options);

                const headEl = document.head
                const scriptEl = document.createElement('script')
                const textNodeEl = document.createTextNode(code)
                scriptEl.type = 'module'
                scriptEl.appendChild(textNodeEl)
                headEl.appendChild(scriptEl)
              }
            }
            
            window.addEventListener('message', handleMessage, false);
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
