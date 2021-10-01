import { ChangeEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import type { SelectedType } from './types'

const sections = [
  {
    section: 'Introduction',
    chapters: [
      {
        name: 'What is React?',
        url: 'what-is-react',
      },
      {
        name: 'JSX',
        url: 'jsx',
      },
      {
        name: 'Rendering Elements',
        url: 'rendering-elements',
      },
    ],
  },
  {
    section: 'Styling',
    chapters: [
      {
        name: 'CSS',
        url: 'css',
      },
      {
        name: 'CSS-in-JS',
        url: 'css-in-js',
      },
      {
        name: 'CSS Modules',
        url: 'css-modules',
      },
      {
        name: 'CSS Frameworks',
        url: 'css-frameworks',
      },
    ],
  },
  {
    section: 'Props and Components',
    chapters: [
      {
        name: 'Props',
        url: 'props',
      },
      {
        name: 'Components',
        url: 'components',
      },
    ],
  },
  {
    section: 'State',
    chapters: [
      {
        name: 'State and Lifecycle',
        url: 'state-and-lifecycle',
      },
      {
        name: 'Lifting State Up',
        url: 'lifting-state-up',
      },
    ],
  },
  {
    section: 'Events',
    chapters: [
      {
        name: 'Handling Events',
        url: 'handling-events',
      },
      {
        name: 'Forms',
        url: 'forms',
      },
    ],
  },
  {
    section: 'Logic',
    chapters: [
      {
        name: 'Conditional Rendering',
        url: 'conditional-rendering',
      },
      {
        name: 'Lists and Keys',
        url: 'lists-and-keys',
      },
    ],
  },
  {
    section: 'Hooks',
    chapters: [
      {
        name: 'useState',
        url: 'use-state',
      },
      {
        name: 'useEffect',
        url: 'use-effect',
      },
      {
        name: 'useReducer',
        url: 'use-ref',
      },
      {
        name: 'useContext',
        url: 'use-context',
      },
    ],
  },
  {
    section: 'Animations',
    chapters: [
      {
        name: 'Animations',
        url: 'animations',
      },
    ],
  },
]

export function Sections() {
  const [selected, setSelected] = useState<SelectedType>({
    value: 'what-is-react',
    text: 'What is React?',
  })
  const history = useHistory()
  const { value, text } = selected

  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { options, selectedIndex, value } = event.target
    const text = options[selectedIndex].text
    setSelected({ value, text })
    history.push(value)
  }

  return (
    <>
      <h1 className="pb-1 text-2xl border-b border-gray-700/40">{text}</h1>
      <div className="relative">
        <div className="absolute z-0 w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 blur animate"></div>
        <div className="relative z-10">
          <select
            onChange={handleSelect}
            value={value}
            className="w-full bg-gray-800 rounded"
            name="chapters"
            id="chapters"
          >
            {sections.map(({ section, chapters }) => (
              <optgroup key={section} className="bg-gray-800" label={section}>
                {chapters.map(({ name, url }) => (
                  <option key={url} value={url}>
                    {name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}
