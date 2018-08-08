// Title  : Operators
// Author : Frank Faustino
// Date   : 2018-08-08
// Lang   : JavaScript

const negativeCheck = (x, y) => {
  const output = [0]

  if (Math.sign(x) === -1) {
    output[0] += 1
    output.push(Math.abs(x))
  } else {
    output.push(x)
  }

  if (Math.sign(y) === -1) {
    output[0] += 1
    output.push(Math.abs(y))
  } else {
    output.push(y)
  }

  return output
}

const multiply = (x, y) => {
  const xy = negativeCheck(x, y)
  let product = 0

  for (let i = 0; i < xy[2]; i++) {
    product += xy[1]
  }

  return xy[0] === 1 ? -product : product
}

const divide = (x, y) => {
  const xy = negativeCheck(x, y)
  let quotient = 0
  let remainder = xy[1]

  while (remainder >= xy[2]) {
    quotient++
    remainder -= xy[2]
  }

  return xy[0] === 1 ? -quotient : quotient
}

const modulo = (x, y) => {
  const xy = negativeCheck(x, y)
  let remainder = xy[1]

  while (remainder >= xy[2]) {
    remainder -= xy[2]
  }

  return xy[0] === 1 ? -remainder : remainder
}

// Test Cases
// console.log(multiply(0, 5)) // 0
// console.log(multiply(3, 4)) // 12
// console.log(multiply(4, 5)) // 20
// console.log(multiply(-4, -4)) // 16
// console.log(multiply(-5, -5)) // 25
// console.log(multiply(-3, 4)) // -12
// console.log(multiply(4, -5)) // -20
// console.log(divide(5, 2)) // 2
// console.log(divide(10, 9)) // 1
// console.log(divide(50, 51)) // 0
// console.log(divide(4, 2)) // 2
// console.log(divide(-5, 2)) // -2
// console.log(divide(10, -3)) // -3
// console.log(divide(-8, -2)) // 4
// console.log(divide(-5, -4)) // 1
// console.log(modulo(10, 2)) // 0
// console.log(modulo(50, 26)) // 24
// console.log(modulo(-10, 2)) // -0