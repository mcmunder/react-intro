import React, { Component } from 'react'
import logo from '../../logo.svg'
import NerdClock from '../NerdClock/NerdClock'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clockMounted: false
    }
  }

  toggleClock () {
    this.setState({
      clockMounted: !this.state.clockMounted
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <button
          onClick={() => this.toggleClock()}>
          {`${this.state.clockMounted ? 'Unmount' : 'Mount'} clock`}
        </button>
        {this.state.clockMounted && <NerdClock />}
      </div>
    )
  }
}

export default App
