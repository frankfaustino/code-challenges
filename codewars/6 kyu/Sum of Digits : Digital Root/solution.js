// Source : https://www.codewars.com/kata/sum-of-digits-slash-digital-root/javascript
// Author : Frank Faustino
// Date   : 2017-09-16

const digital_root = n => (n - 1) % 9 + 1

console.log(digital_root(0))
console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))
console.log(digital_root(1234))

// const digital_root = n => {
//   const x = n
//     .toString()
//     .split('')
//     .reduce((a, b) => +a + +b)
//   return x.length === 1 ? +x : digital_root(x)
// }