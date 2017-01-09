import { SET_EVENT_TYPE } from './action-types'
import reducer from './reducer'

const previousState = {
  eventType: 'previousEvent'
}

it('returns previous state when no action type is matched', () => {
  const expected = reducer(previousState, {
    type: 'SOME_UNMATCHED_TYPE',
    payload: 'someBS'
  })
  expect(expected.eventType).toBe('previousEvent')
})

it('reduces eventType correctly', () => {
  const expected = reducer(previousState, {
    type: SET_EVENT_TYPE,
    payload: 'someEvent'
  })
  expect(expected.eventType).toBe('someEvent')
})
