// Title  : Longest Consecutive Strings
// Author : Frank Faustino
// Date   : 2018-02-22
// Lang   : JavaScript

// a. map, reduce, slice, join
const longestConsecutive = (arr, k) =>
  k <= 0 || k > arr.length
    ? ''
    : arr
      .map((_, i) => arr.slice(i, i + k).join(''))
      .reduce((a, c) => (c.length > a.length ? c : a))

// b. for loop, slice, join
const longestConsecutive = (arr, k) => {
  if (k <= 0 || k > arr.length) return ''
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
  if (k <= 0 || k > n) return ''
  let output = ''
  let i = 0

  while (i < n) {
    let current = arr.slice(i, i + k).join('')
    if (current.length > output.length) output = current
    i++
  }

  return output
}
