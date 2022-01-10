// Source : https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Author : Frank Faustino
// Date   : 2022-01-09

// Use match method to get an array of matches against RegEx
const getCount = str => (str.match(/[aeiou]/g) || []).length

// function getCount(str) {
//     let vowelsCount = 0
//     const vowels = { a: true, e: true, i: true, o: true, u: true }
//     for (let i = 0; i < str.length; i++) {
//         if (vowels[str[i]]) vowelsCount++
//     }
//     return vowelsCount
// }

module.exports = getCount
