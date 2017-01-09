import React from 'react'
import App from '../components/App/App'
import { connect } from 'react-redux'
import { setEventType } from '../store/actions'

const mapStateToProps = state => {
  return {
    eventType: state.eventType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEventType: dispatch(setEventType)
  }
}

const AppContainer = props => {
  return <App {...props} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
