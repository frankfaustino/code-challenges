// Source : https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1
// Author : Frank Faustino
// Date   : 2021-12-31


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
// basically tallies the number of bits that isn't a matching pair (hamming distance)
// match & length counts the tally
const hammingDistance = (a, b) => (a ^ b).toString(2).match(/1/g).length


module.exports = hammingDistance
