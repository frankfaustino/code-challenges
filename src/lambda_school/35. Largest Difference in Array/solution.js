// Title  : Largest Difference
// Author : Frank Faustino
// Date   : 2018-04-16
// Lang   : JavaScript

// a) Math.min / Math.max
const largestDifference = arr => {
  let low = arr[0]
  let high = arr[1] - low

  arr.forEach(num => {
    low = Math.min(num, low)
    high = Math.max(num - low, high)
  })
  return high
}


// b) nested for loops
const largestDifference = arr => {
  let ans = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = arr[j] - arr[i]
      if (diff > ans) ans = diff
    }
  }
  return ans
}