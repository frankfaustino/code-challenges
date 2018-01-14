// Source : https://www.codewars.com/kata/simple-calculator/solutions/javascript
// Author : Frank Faustino
// Date   : 2016-09-16

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
// Your function will accept three arguments:
// The first and second argument will be numbers.
// The third argument will represent a sign indicating the operation to perform on these two numbers.

// isNaN(), RegEx, test(), eval()
const calculator = (a, b, s) =>
  !isNaN(a + b) && /[\+\-\*\/]/.test(s)
  ? eval(a + s + b) : 'unknown value'

// IIFE
const calculator = (a, b, s) => {
  if (isNaN(a) || isNaN(b) || /[^\+\-\*\/]/.test(s)) return 'unknown value'
  return {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => a / b
  }[s]()
}

// Switch
const calculator = (a, b, s) => {
  if (!isNaN(a + b)) {
    switch (s) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
  }
  return 'unknown value'
}

console.log(calculator('h',2,"+"))
console.log(calculator('1',2,"+"))
console.log(calculator('1',2,"$"))