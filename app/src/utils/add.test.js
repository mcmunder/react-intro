import { add } from './add'

it('adds integers correctly', () => {
  const expected = add(3, 4)
  expect(expected).toBe(7)
})

it('adds floats correctly', () => {
  const expected = add(3.45, 4.35)
  expect(expected).toBe(7.80)
})
