// Source : https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem
// Author : Frank Faustino
// Date   : 2018-03-30
// Lang   : JavaScript

const main = () => {
  const S = readLine()
  try {
      console.log(eval(S))
  } catch (e) {
      console.log('Bad String')
  }
}
