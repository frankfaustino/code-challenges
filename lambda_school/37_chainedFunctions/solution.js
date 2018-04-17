// Title  : Chained Functions
// Author : Frank Faustino
// Date   : 2018-04-17
// Lang   : JavaScript

// a) reduce()
const chainedFunctions = arr => arg => arr.reduce((a, b) => b(a), arg)

// b) for...of
const chainedFunctions = arr => {
  return arg => {
    for (let fn of arr) {
      arg = fn(arg)
    }
    return arg
  }
}