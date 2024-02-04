// Source : https://www.codewars.com/kata/5a512f6a80eba857280000fc
// Author : Frank Faustino
// Date   : 2024-02-03

// Time complexity  : O(n log n)
// Space complexity : O(log n)
const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1]

module.exports = nthSmallest

