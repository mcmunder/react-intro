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
      <div
        className='event-container'
        onClick={(e) => this.handleEvent(e)}
        onDoubleClick={(e) => this.handleEvent(e)}
        onChange={(e) => this.handleEvent(e)}
        onTouchStart={(e) => this.handleEvent(e)}
        onTouchEnd={(e) => this.handleEvent(e)}
        onCopy={(e) => this.handleEvent(e)}
        onPaste={(e) => this.handleEvent(e)}
        onMouseEnter={(e) => this.handleEvent(e)}
        onMouseLeave={(e) => this.handleEvent(e)} >
        <div className='event-inspector'>
          <h3>Event Inspector</h3>
          <h4>Current Event:</h4>
          <h4>{this.state.currentEvent}</h4>
        </div>
      </div>
    )
  }
}

export default EventInspector
