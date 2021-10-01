import { Introduction } from './content/introduction/Introduction'
import { JSX } from './content/introduction/JSX'

import type { DataType, RouteType } from './types'

export const data: DataType[] = [
  {
    section: 'Introduction',
    chapters: [
      {
        name: 'What is React?',
        path: 'what-is-react',
        component: Introduction,
        files: [
          {
            'index.html': {
              name: 'index.html',
              language: 'html',
              value: '<h1>Hello, World</h1>',
            },
          },
        ],
      },
      {
        name: 'JSX',
        path: 'jsx',
        component: JSX,
      },
      {
        name: 'Rendering Elements',
        path: 'rendering-elements',
      },
    ],
  },
  {
    section: 'Styling',
    chapters: [
      {
        name: 'CSS',
        path: 'css',
      },
      {
        name: 'CSS-in-JS',
        path: 'css-in-js',
      },
      {
        name: 'CSS Modules',
        path: 'css-modules',
      },
      {
        name: 'CSS Frameworks',
        path: 'css-frameworks',
      },
    ],
  },
  {
    section: 'Props and Components',
    chapters: [
      {
        name: 'Props',
        path: 'props',
      },
      {
        name: 'Components',
        path: 'components',
      },
    ],
  },
  {
    section: 'State',
    chapters: [
      {
        name: 'State and Lifecycle',
        path: 'state-and-lifecycle',
      },
      {
        name: 'Lifting State Up',
        path: 'lifting-state-up',
      },
    ],
  },
  {
    section: 'Events',
    chapters: [
      {
        name: 'Handling Events',
        path: 'handling-events',
      },
      {
        name: 'Forms',
        path: 'forms',
      },
    ],
  },
  {
    section: 'Logic',
    chapters: [
      {
        name: 'Conditional Rendering',
        path: 'conditional-rendering',
      },
      {
        name: 'Lists and Keys',
        path: 'lists-and-keys',
      },
    ],
  },
  {
    section: 'Hooks',
    chapters: [
      {
        name: 'useState',
        path: 'use-state',
      },
      {
        name: 'useEffect',
        path: 'use-effect',
      },
      {
        name: 'useReducer',
        path: 'use-ref',
      },
      {
        name: 'useContext',
        path: 'use-context',
      },
    ],
  },
  {
    section: 'Animations',
    chapters: [
      {
        name: 'Animations',
        path: 'animations',
      },
    ],
  },
]

export const routes = data.reduce((routes: RouteType[], section) => {
  const chapterRoutes = section.chapters.map(({ path, component }) => {
    return {
      path: `/${path}`,
      component: component,
    }
  })

  return [...routes, ...chapterRoutes]
}, [])
