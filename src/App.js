import React from "react";
// import {
//   ErrorPanel,
//   PushToTalkButton,
//   PushToTalkButtonContainer
// } from '@speechly/react-ui'
import { Dashboard } from './views'
import Home from "./views/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <div className='content'>
        <div className='container'>
          <Dashboard />
        </div>
      </div> */}
      {/* <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
