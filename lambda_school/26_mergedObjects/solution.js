// Title  : Merged Objects
// Author : Frank Faustino
// Date   : 2018-03-21
// Lang   : JavaScript

// a) Object.assign, spread syntax
const mergeObjects = arr => Object.assign({}, ...arr)

// b) reduce, spread syntax
const mergeObjects = arr => arr.reduce((a, c) => ({...a, ...c}))

// c) forEach, Object.assign
const mergeObjects = (arr) => {
  const output = {}
  arr.forEach((obj) => {
    Object.assign(output, obj)
  })
  return output
}

// d) forEach, Object.keys
const mergeObjects = (arr) => {
  let output = {}

  arr.forEach(obj => {
    Object.keys(obj).forEach(key => {
      output[key] = obj[key]
    })
  })
  return output
}
