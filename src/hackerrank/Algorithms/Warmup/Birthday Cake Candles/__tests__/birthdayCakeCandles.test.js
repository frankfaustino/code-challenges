const birthdayCakeCandles = require('../birthdayCakeCandles')

describe('Hackerrank — birthdayCakeCandles', () => {
  test('Simple tests', () => {
    expect(birthdayCakeCandles([3, 2, 1, 3])).toEqual(2)
    expect(birthdayCakeCandles([1, 9, 9, 0])).toEqual(2)
    expect(birthdayCakeCandles([2, 8, 7, 6])).toEqual(1)
    expect(birthdayCakeCandles([5, 5, 5, 5])).toEqual(4)
    expect(birthdayCakeCandles([0])).toEqual(1)
  })
})