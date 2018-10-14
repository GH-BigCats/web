import React, { Component } from 'react'
import logo from './maya_logo.png'
import './App.css'
import Charts from './Charts'
import MayaConnect from './MayaConnect'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Charts />
        <MayaConnect />
      </div>
    )
  }
}

export default App
