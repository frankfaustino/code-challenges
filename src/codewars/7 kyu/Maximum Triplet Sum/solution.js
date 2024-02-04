// Source : https://www.codewars.com/kata/5aa1bcda373c2eb596000112
// Author : Frank Faustino
// Date   : 2024-02-03

// Time complexity  : O(n log n)
// Space complexity : O(n)
const maxTriSum = nums => [...new Set(nums)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, n) => sum + n, 0)

module.exports = maxTriSum

