// Title  : Longest String
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

// a. reduce
const longestStr = arr => arr.reduce((a, b) => a.length > b.length ? a : b)

// b. for loop
const longestStr = arr => {
  let longest = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i]
  }

  return longest
}

// c. forEach
const longestStr = arr => {
  let longest = arr[0]

  arr.forEach(str => {
    if (str.length > longest.length) longest = str
  })

  return longest
}
