// Source : https://leetcode.com/problems/longest-palindrome
// Author : Frank Faustino
// Date   : 2018-12-02
// Lang   : JavaScript

// Time complexity: O(n)
// Space complexity: O(n)
const longestPalindrome = function(s) {
  const map = s.split('').reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1
    return obj
  }, {})
  let ans = 0

  Object.values(map).forEach(freq => {
    ans += Math.floor(freq / 2) * 2
    if (ans % 2 === 0 && freq % 2 === 1) {
      ans += 1
    }
  })

  return ans
}

module.exports = longestPalindrome
