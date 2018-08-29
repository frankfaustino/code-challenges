// Title  : Prime Reduction
// Author : Frank Faustino
// Date   : 2018-04-12
// Lang   : JavaScript

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return num > 1
}

function reducer(prime, primesArr) {
  if (prime === 1) return true
  if (primesArr.includes(prime)) return false

  let newNum = 0
  let num = prime

  while (num > 0) {
    newNum += Math.pow(num % 10, 2)
    num -= num % 10
    num /= 10
  }
  return reducer(newNum, primesArr.concat(prime))
}

function primeReduction(a, b) {
  let count = 0
  for (let i = a; i < b; i++) {
    if (isPrime(i) && reducer(i, [])) count++
  }
  return count
}
