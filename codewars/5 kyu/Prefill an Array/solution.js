// Source : https://www.codewars.com/kata/prefill-an-array/javascript
// Author : Frank Faustino
// Date   : 2018-01-13

const prefill = (n, v) => {
  if (/\D/g.test(n) || n < 0) throw new TypeError(`${n} is invalid`)
  return [...Array(+n)].map(_ => v)
}

console.log(prefill(0, 1))
console.log(prefill(9, 9))
console.log(prefill(true, 1))
console.log(prefill('xyz', 1))
console.log(prefill(-1, 1))
