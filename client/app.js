import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
// import './semantic/dist/semantic.min.css' //this is not a working path, but one way I've seen to bring in customized styling

/*
This is one version I've seen to bring in customized stlying
import "semantic-ui-css/semantic.min.css";

import "./styles.css";
*/

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes />
    </div>
  )
}

export default App
