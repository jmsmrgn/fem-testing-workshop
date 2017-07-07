// sum() -> 0
// sum(5) -> 5
// sum(4, 5, 6) -> 15
import sum from '../sum'

test('passing nothing gives us zero', () => {
  const result = sum()
  expect(result).toBe(0)
})

test('passing a single number returns that number', () => {
  const result = sum(5)
  expect(result).toBe(5)
})

test('passing any number of numbers returns their sum', () => {
  const result = sum(4, 5, 6)
  expect(result).toBe(15)
})
