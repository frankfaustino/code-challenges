// Title  : Merged Objects
// Author : Frank Faustino
// Date   : 2018-03-21
// Lang   : JavaScript

// a) reduce, spread syntax
const mergeObjects = arr => arr.reduce((a, c) => ({...a, ...c}))

// b) forEach, Object.assign
const mergeObjects = (arr) => {
  const output = {}
  arr.forEach((obj) => {
    Object.assign(output, obj)
  })
  return output
}

// c) forEach, Object.keys, bracket notation
const mergeObjects = (arr) => {
  let output = {}

  arr.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (!output[key] || output[key] !== obj[key]) output[key] = obj[key]
    })
  })
  return output
}
