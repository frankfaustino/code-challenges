// Source : https://www.codewars.com/kata/calculating-with-functions/javascript
// Author : Frank Faustino
// Date   : 2017-12-27

const f = n => op => op ? op(n) : n

const zero = f(0)
const one = f(1)
const two = f(2)
const three = f(3)
const four = f(4)
const five = f(5)
const six = f(6)
const seven = f(7)
const eight = f(8)
const nine = f(9)

const plus = b => a => a + b
const minus = b => a => a - b
const times = b => a => a * b
const dividedBy = b => a => a / b

console.log(one(plus(two())))
console.log(eight(dividedBy(four())))
console.log(five())
