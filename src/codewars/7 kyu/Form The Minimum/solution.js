// Source : https://www.codewars.com/kata/5ac6932b2f317b96980000ca
// Author : Frank Faustino
// Date   : 2024-02-07

// Time complexity  : O(n log n)
// Space complexity : O(n)
const minValue = values =>
    Number([...new Set(values)].sort((a, b) => a - b).join(''))

module.exports = minValue

