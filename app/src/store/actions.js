import { SET_EVENT_TYPE } from './action-types'

export const setEventType = (payload) => {
  return {
    type: SET_EVENT_TYPE,
    payload
  }
}
