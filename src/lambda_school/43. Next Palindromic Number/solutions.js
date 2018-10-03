// Title  : Next Palindromic Number
// Author : Frank Faustino
// Date   : 2018-06-07
// Lang   : JavaScript

// a) Recusive
const nextPalindrome = n => {
  let x, y
  const recursion = num => {
    x = num + 1
    y = Number((x + '').split('').reverse().join(''));
    (x === y) ? y : recursion(x)
  }
  recursion(n)
  return y
}

// b) while loop
const nextPalindrome = n => {
  while (true) {
    n++
    if (n.toString() === n.toString().split('').reverse().join('')) return n
  }
}

