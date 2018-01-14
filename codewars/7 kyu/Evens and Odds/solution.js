// Source : https://www.codewars.com/kata/evens-and-odds
// Author : Frank Faustino
// Date   : 2017-09-16

// This kata is about converting numbers to their binary or hexadecimal representation
// If a number is even, convert it to binary. If a number is odd, convert it to hex

const evensAndOdds = n => n % 2 === 0 ? n.toString(2) : n.toString(16)

console.log(2)  // 10
console.log(13) // d
