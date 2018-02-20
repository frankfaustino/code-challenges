// Title  : Reverse Number
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

// a. modulo and while loop
const reverseNumber = n => {
  let reversed = 0

  while (n !== 0) {
    reversed *= 10
    reversed += n % 10
    n = parseInt(n / 10)
 }

 return reversed
}

// b. modulo and for loop
const reverseNumber = n => {
  let reversed = 0

  for(; n; n = parseInt(n / 10)) {
    reversed *= 10
    reversed += n % 10
  }

  return reversed
}

// c. toString, split, reverse, join
const reverseNumber = n => Number(n.toString().split('').reverse().join(''))

// d. toString, split, for loop
const reverseNumber = n => {
  const arr = n.toString().split('')
  let reversed = ''

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed += arr[i]
  }

  return +reversed
}
