import React, { Component } from 'react'
import Navbar from './components/navigation/Navbar'
import Routes from './utilities/routes'

class App extends Component {
  constructor (props) {
    super(props)
  }
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
