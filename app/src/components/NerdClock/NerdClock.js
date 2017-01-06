import React, { Component } from 'react'
import './NerdClock.css'

class NerdClock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timestamp: Date.now()
    }
  }

  componentDidMount () {
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      timestamp: Date.now()
    })
  }

  render () {
    return (
      <div>
        <div className='clock-container'>
          <div className='clock'>
            <h4>Nerd clock</h4>
            <h4>{this.state.timestamp}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default NerdClock
