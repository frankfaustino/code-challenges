const { input, partOne, partTwo } = require('../solution')

describe('Advent of Code — Day 01', () => {
  test('Part one test cases', () => {
    expect(partOne('+1\n-2\n+3\n+1')).toBe(3)
    expect(partOne('+1\n+1\n+1')).toBe(3)
    expect(partOne('+1\n+1\n-2')).toBe(0)
    expect(partOne('-1\n-2\n-3')).toBe(-6)
  })

  test('Part one test provided input', () => {
    expect(partOne(input)).toBe(553)
  })

  test('Part two test cases', () => {
    expect(partTwo('+1\n-2\n+3\n+1')).toBe(2)
    expect(partTwo('+1\n-1')).toBe(0)
    expect(partTwo('+3\n+3\n+4\n-2\n-4')).toBe(10)
    expect(partTwo('-6\n+3\n+8\n+5\n-6')).toBe(5)
    expect(partTwo('+7\n+7\n-2\n-7\n-4')).toBe(14)
  })

  test('Part two test provided input', () => {
    expect(partTwo(input)).toBe(78724)
  })
})