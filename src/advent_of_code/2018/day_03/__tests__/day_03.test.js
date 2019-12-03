const { input, partOne, partTwo } = require('../solution')

describe('Advent of Code — Day 03', () => {
  test('Part one test case', () => {
    expect(partOne(input)).toBe(101565)
  })
  test('Part two test case', () => {
    expect(partTwo()).toBe(656)
  })
})
