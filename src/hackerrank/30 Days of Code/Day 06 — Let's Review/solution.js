// Source: https://www.hackerrank.com/challenges/30-review-loop/problem
// Author: Frank Faustino
// Date  : 2018-01-21
// Lang  : JavaScript

const processData = (input) => input
  .split('\n')
  .slice(1)
  .map(v => {
    let even = ''
    let odd = ''
    v.split('').filter((v, i) => (i % 2 === 0 ? (even += v) : (odd += v)))
    console.log(even + ' ' + odd)
  })

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})