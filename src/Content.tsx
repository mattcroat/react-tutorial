import { Switch, Route } from 'react-router-dom'

import { Introduction } from './content/introduction/Introduction'
import { JSX } from './content/introduction/JSX'
import { Sections } from './Sections'

export const routes = [
  {
    path: '/what-is-react',
    component: Introduction,
  },
  {
    path: '/jsx',
    component: JSX,
  },
  {
    path: '*',
    component: () => (
      <p>
        hi, you're seeing this because the person didn't bother placing content
        yet.
      </p>
    ),
  },
]

export function Content() {
  return (
    <section className="px-8 pt-2 space-y-8 bg-gray-800 border-r border-gray-700/40">
      <Sections />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </section>
  )
}
