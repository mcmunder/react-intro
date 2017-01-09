import { SET_EVENT_TYPE } from './action-types'

const initialState = {
  eventType: 'none'
}

export default (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case SET_EVENT_TYPE:
      return {
        eventType: action.payload
      }
    default:
      return state
  }
}
