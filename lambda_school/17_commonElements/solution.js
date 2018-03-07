// Title  : Common Elements
// Author : Frank Faustino
// Date   : 2018-03-06
// Lang   : JavaScript

// a) Set, filter, includes
// const commonElements = (a1, a2) => [...new Set(a1.filter(i => a2.includes(i)))]

// b) hashmap lookup, forEach, filter
// const commonElements = (a1, a2) => {
//   const lookup = {}
//   a1.forEach(item => lookup[item] = true)
//   return a2.filter(item => lookup[item])
// }

// c) reduce, includes
const commonElements = (a1, a2) => a1.reduce((a, c) => {
  if (a2.includes(c) && !a.includes(c)) a.push(c)
  return a
}, [])

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]))
console.log(commonElements(['a', 'b', 'c'], ['x', 'y', 'z', 'a']))
console.log(commonElements([1, 2, 3], [4, 5, 6]))