// Source : https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays
// Author : Frank Faustino
// Date   : 2017-09-12

const largestOfFour = arr => mainArray.map((subArray) => Math.max(...subArray))

// const largestOfFour = mainArray => mainArray
//   .map((subArray) => subArray.reduce((a, b) => (b > a) ? b : a, 0))

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))