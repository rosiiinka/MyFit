import React, { Component } from 'react'
import Navbar from './components/navigation/Navbar'
import Routes from './utilities/routes'
import './index.css'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
