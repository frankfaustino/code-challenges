// Source : https://www.codewars.com/kata/56d93f249c844788bc000002
// Author : Frank Faustino
// Date   : 2024-02-09

// Time complexity  : O(n)
// Space complexity : O(n)
const testit = s => s
    .split(' ')
    .map(w => w.slice(0, -1) + w.slice(-1).toUpperCase())
    .join(' ')

module.exports = testit

