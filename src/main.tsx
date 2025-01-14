import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <Fragment>
    <App />
  </Fragment>
)
