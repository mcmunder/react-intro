import React from 'react'
import logo from '../../logo.svg'
import EventInspector from '../EventInspector/EventInspector'
import './App.css'

const App = (props) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <EventInspector />
    </div>
  )
}

export default App
