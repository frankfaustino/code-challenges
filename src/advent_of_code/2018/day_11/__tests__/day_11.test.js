const { partOne, partTwo } = require('../solution')

describe('Advent of Code: Day 11', () => {
  test('Part One: 3x3 square with the largest total power', () => {
    expect(partOne()).toEqual({ total: 29, x: 233, y: 36 })
  })
  test('Part Two: X,Y,size identifier of the square with the largest total power', () => {
    expect(partTwo()).toEqual({ size: 14, total: 156, x: 231, y: 107 })
  })
})
