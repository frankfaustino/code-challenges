// Source : https://www.hackerrank.com/challenges/30-arrays/problem
// Author : Frank Faustino
// Date   : 2018-01-21
// Lang   : JavaScript

const main = () => {
  parseInt(readLine())
  console.log(
    readLine()
      .split(' ')
      .map(Number)
      .reverse()
      .join(' ')
  )
}