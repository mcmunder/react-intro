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
    console.log('componentDidMount')
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      timestamp: Date.now()
    })
  }

  render () {
    console.log('render')
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
