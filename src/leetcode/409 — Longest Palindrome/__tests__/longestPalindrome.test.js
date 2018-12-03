const longestPalindrome = require('../longestPalindrome')

describe('Leetcode: 409 — Longest Palindrome', () => {
  test('Test cases', () => {
    expect(longestPalindrome('abccccdd')).toBe(7)
    expect(longestPalindrome('abccccddeeeee')).toBe(11)
    expect(longestPalindrome('abccccddeeeeee')).toBe(13)
    expect(longestPalindrome('aabbcc')).toBe(6)
    expect(longestPalindrome('abccccdd')).toBe(7)
  })
})
