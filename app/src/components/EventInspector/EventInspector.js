import React, { Component } from 'react'
import './EventInspector.css'

class EventInspector extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentEvent: 'none'
    }
  }

  render () {
    return (
      <div className='event-container'>
        <div className='event-inspector'>
          <h4>Current Event</h4>
          <h4>{this.state.currentEvent}</h4>
        </div>
      </div>
    )
  }
}

export default EventInspector
