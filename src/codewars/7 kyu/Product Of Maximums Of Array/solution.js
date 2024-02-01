// Source : https://www.codewars.com/kata/5a63948acadebff56f000018
// Author : Frank Faustino
// Date   : 2024-02-01

// Time complexity  : O(n log n)
// Space complexity : O(1)
const maxProduct = (numbers, size) => numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((product, val) => product * val, 1)

module.exports = maxProduct

