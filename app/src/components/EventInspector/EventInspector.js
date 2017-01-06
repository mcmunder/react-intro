import React, { Component } from 'react'
import './EventInspector.css'

class EventInspector extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentEvent: 'none'
    }
  }

  handleEvent (e) {
    this.setState({
      currentEvent: e.type
    })
  }
  render () {
    return (
      <div className='event-container'>
        <div
          className='event-inspector'
          onClick={(e) => this.handleEvent(e)}
          onDoubleClick={(e) => this.handleEvent(e)}
          onTouchStart={(e) => this.handleEvent(e)}
          onTouchEnd={(e) => this.handleEvent(e)}
          onCopy={(e) => this.handleEvent(e)}
          onPaste={(e) => this.handleEvent(e)}
          onMouseEnter={(e) => this.handleEvent(e)}
          onMouseLeave={(e) => this.handleEvent(e)} >
          <h3>Event Inspector</h3>
          <h4>Current Event:</h4>
          <h2>{this.state.currentEvent}</h2>
        </div>
      </div>
    )
  }
}

export default EventInspector
