import React from 'react'
// import { Grid } from '@material-ui/core'

// import Details from './components/Details/Details'
// import Main from './components/Main/Main'
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer
} from '@speechly/react-ui'
// import useStyles from './styles'
import { Dashboard } from './views'

const App = () => {
  //   const classes = useStyles()

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
