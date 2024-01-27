// Source : https://www.codewars.com/kata/520b9d2ad5c005041100000f
// Author : Frank Faustino
// Date   : 2024-01-26

// Time complexity  : O(n)
// Space complexity : O(n)
const pigIt = s => s
    .split(' ')
    .map(w => /^[.,!?]/.test(w[0]) ? w[0] : `${w.slice(1)}${w[0]}ay`)
    .join(' ')

module.exports = pigIt

