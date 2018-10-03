// Source : Sum of Digits
// Author : Frank Faustino
// Date   : 2018-03-05
// Lang   : JavaScript

const sumOfDigits = n => n.toString().split('').reduce((a, c) => +a + +c)

// const sumOfDigits = n => (n + '').split('').reduce((a, c) => +a + +c)

// function sumOfDigits(n) {
//   if (n === 0) return 0;
//   return (n % 10) + sumOfDigits((n - (n % 10)) / 10);
// }

// let sum = 0;
// while(n) {
//   sum += n % 10;
//   n = Math.floor(n / 10);
// }

// return sum;

const sumOfDigits = (n) => {
  if (n < 1) return n
  return (n % 10) + sumOfDigits(Math.floor(n/10))
}