const highestProductOf3 = require('../solution.js')

describe('Highest Product of 3 — Solution', () => {
  const error = new Error('There\'s less than 3 items!')

  test('Short array', () => {
    expect(highestProductOf3([1, 2, 3, 4])).toBe(24)
  })

  test('Longer array', () => {
    expect(highestProductOf3([6, 1, 3, 5, 7, 8, 2])).toBe(336)
  })

  test('Array has one negative', () => {
    expect(highestProductOf3([-5, 4, 8, 2, 3])).toBe(96)
  })

  test('Array has two negatives', () => {
    expect(highestProductOf3([-10, 1, 3, 2, -10])).toBe(300)
  })

  test('Array is all negatives', () => {
    expect(highestProductOf3([-5, -1, -3, -2])).toBe(-6)
  })

  test('Error with empty array', () => {
    expect(() => highestProductOf3([])).toThrowError(error)
  })

  test('Error with one number', () => {
    expect(() => highestProductOf3([1])).toThrowError(error)
  })

  test('Error with two numbers', () => {
    expect(() => highestProductOf3([1, 1])).toThrowError(error)
  })
})
