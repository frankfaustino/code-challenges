const { input, partOne } = require('../solution')

describe('Advent of Code — Day 02', () => {
  test('Part one test case', () => {
    const testInput = `
      abcdef\n
      bababc\n
      abbcde\n
      abcccd\n
      aabcdd\n
      abcdee\n
      ababab\n
    `
    expect(partOne(testInput)).toBe(12)
  })

  test('Part one test given input', () => {
    expect(partOne(input)).toBe(5952)
  })
})