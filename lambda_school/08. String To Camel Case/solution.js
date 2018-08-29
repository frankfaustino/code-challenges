// Title  : String to Camel Case
// Author : Frank Faustino
// Date   : 2018-02-20
// Lang   : JavaScript

// a. replace, RegExp, toUpperCase
const toCamelCase = str => str.replace(/(-|_)([a-z])/gi, (x) => x[1].toUpperCase())

// b. Converts entire string toLowerCase first, then replaces any letter that starts with _ or - toUpperCase
const toCamelCase = str => str.toLowerCase().replace(/(_|-)([a-z])/g, (x) => x[1].toUpperCase())

// c. split, for loop, toUpperCase, substr, join
const toCamelCase = str => {
  const arr = str.split(/[-_]/)

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
  }

  return arr.join('')
}