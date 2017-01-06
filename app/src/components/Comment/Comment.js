import React, { Component, PropTypes } from 'react'
import './Comment.css'

class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showAvatar: true
    }
  }

  handleClick () {
    console.log(`${this.state.showAvatar}`)
    this.setState({
      showAvatar: !this.state.showAvatar
    })
  }

  render () {
    return (
      <div className='comment-container'>
        <div>
          {this.state.showAvatar && <img className='avatar'
            src={this.props.author.avatarUrl}
            alt={this.props.author.name} />}
          <div>
            {this.props.author.name}
          </div>
        </div>
        <div>
          <h4>{this.props.text}</h4>
        </div>
        <button
          onClick={() => this.handleClick()}>
          Toggle Avatar
        </button>
      </div>
    )
  }
}

Comment.propTypes = {
  author: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
