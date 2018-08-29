// Title  : Armstrong Number 
// Author : Frank Faustino
// Date   : 2018-06-21
// Lang   : JavaScript

// a) reduce
const isArmstrongNumber = (number) =>
  number === number
    .toString()
    .split('')
    .reduce((sum, cur, i, arr) => sum += Math.pow(cur, arr.length), 0)

// b) for loop
const isArmstrongNumber = (number) => {
  const digits = number.toString().split('')
  const exponent = digits.length
  let sum = 0

  for (let i = 0; i < exponent; i++) {
    sum += Math.pow(digits[i], exponent)
  }

  return sum === number
}

