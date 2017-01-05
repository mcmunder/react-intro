import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const comment = {
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'eaternity',
    avatarUrl: 'http://welcome.eurest.ch/images/Switzerland/Eurest_News_Eaternity.jpg'
  }
}

const Comment = props => {
  return (
    <div className='comment-container'>
      <div>
        <img className='avatar'
          src={props.author.avatarUrl}
          alt={props.author.name} />
        <div>
          {props.author.name}
        </div>
      </div>
      <div className='comment-text'>
        <h4>{props.text}</h4>
      </div>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} />
      </div>
    )
  }
}

export default App
