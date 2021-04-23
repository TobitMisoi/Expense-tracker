import React from 'react'
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer
} from '@speechly/react-ui'
import { Dashboard } from './views'

const App = () => {
  return (
    <>
      <div className='content'>
        <div className='container'>
          <Dashboard />
        </div>
      </div>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </>
  )
}

export default App
