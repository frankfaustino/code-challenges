// Source : https://www.hackerrank.com/challenges/30-binary-numbers/problem
// Author : Frank Faustino
// Date   : 2018-01-28
// Lang   : JavaScript

const main = () => {
  const n = parseInt(readLine())
    .toString(2)
    .match(/1+/g)
    .reduce((a, b) => {
      if (b > a) a = b
      return a
    })
  console.log(n.length)
}
