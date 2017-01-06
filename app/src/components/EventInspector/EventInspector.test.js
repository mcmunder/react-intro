import React from 'react'
import EventInspector from './EventInspector'
import { shallow } from 'enzyme'

const wrapper = shallow(<EventInspector />)

// test suite
it('contains the correct text', () => {
  expect(wrapper.find('h3').text()).toEqual('Event Inspector')
  expect(wrapper.find('h4').text()).toEqual('Current Event:')
})

it('has expected initial state', () => {
  expect(wrapper.state()).toEqual({currentEvent: 'none'})
})

it('changes state when event handler is called', () => {
  wrapper.find('.event-inspector').simulate('click', {type: 'click'})
  expect(wrapper.state()).toEqual({currentEvent: 'click'})
  wrapper.find('.event-inspector').simulate('copy', {type: 'copy'})
  expect(wrapper.state()).toEqual({currentEvent: 'copy'})
})
