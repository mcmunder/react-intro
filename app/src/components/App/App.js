import React from 'react'
import logo from '../../logo.svg'
import Comment from '../Comment/Comment'
import './App.css'

const commentData = {
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'eaternity',
    avatarUrl: 'http://welcome.eurest.ch/images/Switzerland/Eurest_News_Eaternity.jpg'
  }
}

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Comment
        text={commentData.text}
        author={commentData.author} />
    </div>
  )
}

export default App
