// Source : https://www.hackerrank.com/challenges/maximum-element/problem
// Author : Frank Faustino
// Date   : 2018-01-28
// Lang   : JavaScript

const processData = input => {
  const parsed = input.split('\n').slice(1)
  const stack = []
  const max = []

  parsed.forEach(query => {
    if (query.charAt(0) === '1') {
      const num = +query.slice(2)
      stack.push(num)
      if (max.length === 0 || max[max.length - 1] < num) {
        max.push(num)
      } else {
        max.push(max[max.length - 1])
      }
    }
    if (query.charAt(0) === '2') {
      stack.pop()
      max.pop()
    }
    if (query.charAt(0) === '3') {
      console.log(max[max.length - 1])
    }
  })
}
