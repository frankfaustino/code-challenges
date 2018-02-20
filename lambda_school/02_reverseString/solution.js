// Title  : Reverse String
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

// a. split reverse join
const reverseString = str => str.split('').reverse().join('')

// b. for loop
const reverseString = str => {
  const arr = str.split('')
  let reversed = ''

  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i]
  }

  return reversed
}

// c. while loop
const reverseString = str => {
  const arr = str.split('')
  let reversed = ''

  while (arr.length) {
    reversed += arr.pop()
  }

  return reversed
}
