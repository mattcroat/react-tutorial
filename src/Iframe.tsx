import { useEffect, useRef } from 'react'

interface IframeProps {
  html: string
}

export function Iframe({ html }: IframeProps) {
  const iframeEl = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const content = iframeEl.current?.contentWindow
    if (content) {
      content.postMessage({ type: 'html', message: html }, '*')
    }
  }, [html])

  return (
    <iframe
      ref={iframeEl}
      className="w-full h-full"
      srcDoc="
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
        </head>
        <body>
        </body>
        <script>
          function handleMessage(event) {
            const { type, message } = event.data;
            if (type === 'html') {
              document.body.innerHTML = message;
            }
          }
          window.addEventListener('message', handleMessage, false);
        </script>
      </html>
    "
    />
  )
}
