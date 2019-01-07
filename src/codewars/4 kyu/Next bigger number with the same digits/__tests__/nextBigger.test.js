const nextBigger = require('../nextBigger')

describe('Codewars — Next bigger number with the same digits', () => {
  test('Small numbers', () => {
    expect(nextBigger(12)).toEqual(21)
    expect(nextBigger(513)).toEqual(531)
    expect(nextBigger(2017)).toEqual(2071)
    expect(nextBigger(414)).toEqual(441)
    expect(nextBigger(144)).toEqual(414)
  })
  test('Bigger numbers', () => {
    expect(nextBigger(123456789)).toEqual(123456798)
    expect(nextBigger(1234567890)).toEqual(1234567908)
    expect(nextBigger(9876543210)).toEqual(-1)
    expect(nextBigger(9999999999)).toEqual(-1)
    expect(nextBigger(59884848459853)).toEqual(59884848483559)
  })
})