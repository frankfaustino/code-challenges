const { readFileSync } = require('fs')
const anagram = require('../anagram')

const input = readFileSync(require.resolve('../input'), 'utf8').split('\n').slice(1)
const sample_0 = readFileSync(require.resolve('../sample_0'), 'utf8').split('\n').slice(1)
const sample_1 = readFileSync(require.resolve('../sample_1'), 'utf8').split('\n').slice(1)

describe('HackerRank: Algorithms — Strings — Anagram', () => {
  test('sample test case 0', () => {
    const ans = [3, 5, 5]
    sample_0.forEach((line, i) => {
      expect(anagram(line)).toBe(ans[i])
    })
  })
  test('sample test case 1', () => {
    const ans = [3, 1, -1, 2, 0, 1]
    sample_1.forEach((line, i) => {
      expect(anagram(line)).toBe(ans[i])
    })
  })
  test('input file test case 0', () => {
    const ans = [10, 13, 5, 26, 15, -1, 3, 13, 13, -1]
    input.forEach((line, i) => {
      expect(anagram(line)).toBe(ans[i])
    })
  })
})