// Source : https://www.codewars.com/kata/numbers-of-letters-of-numbers/javascript
// Author : Frank Faustino
// Date   : 2017-09-15

const number = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
}

const numbersOfLetters = (integer, ret = []) => {
  let arr = ('' + integer).split('')
  let s = arr.reduce((ac, cu) => ac + number[cu], '')
  ret.push(s)
  return s === 'four' ? ret : numbersOfLetters(s.length, ret)
}

console.log(numbersOfLetters(60))
console.log(numbersOfLetters(1))
console.log(numbersOfLetters(12))
console.log(numbersOfLetters(37))
console.log(numbersOfLetters(311))
console.log(numbersOfLetters(999))
