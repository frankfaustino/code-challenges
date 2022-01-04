// Source : https://www.codewars.com/kata/583ebb9328a0c034490001ba
// Author : Frank Faustino
// Date   : 2022-01-04

// Create a set with elements from both arrays. Compare size of set with the sum of both arrays' lengths.
const duplicateElements = (m, n) => (new Set([...m, ...n])).size !== m.length + n.length

module.exports = duplicateElements
