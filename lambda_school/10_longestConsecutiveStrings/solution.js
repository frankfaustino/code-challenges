// Title  : Longest Consecutive Strings
// Author : Frank Faustino
// Date   : 2018-02-22
// Lang   : JavaScript

// a. map, reduce, slice, join
const longestConsecutive = (arr, k) => {
  const n = arr.length
  if (n === 0 || k > n || k <= 0) return ''

  return arr.map((_, i) => arr.slice(i, i + k).join('')).reduce((a, c) => (a.length > c.length ? a : c))
}

// b. for loop, slice, join
const longestConsecutive = (arr, k) => {
  const n = arr.length
  if (n === 0 || k > n || k <= 0) return ''
  let output = ''

  for (let i = 0; i < arr.length; i++) {
    let current = arr.slice(i, i + k).join('')
    if (output.length < current.length) output = current
  }

  return output
}

// c. while loop, slice, join
const longestConsecutive = (arr, k) => {
  const n = arr.length
  if (n == 0 || k > n || k <= 0) return ''
  let output = ''
  let i = 0
  
  while (i < n) {
    let current = arr.slice(i, i + k).join('')
    if (current.length > output.length) output = current
    i++
  }

  return output
}
