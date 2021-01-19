import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import 'moment/locale/ru'

import App from './App'

WebFont.load({
  google: {
    families: ['Roboto'],
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
