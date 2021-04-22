import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import { Provider } from './context/context'

const appId = process.env.REACT_APP_APPID;


ReactDOM.render(
  <SpeechProvider appId={appId} language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)
