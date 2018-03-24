// Title  : Twin Primes
// Author : Frank Faustino
// Date   : 2018-03-24
// Lang   : JavaScript

const isTwinPrime = (num) => {
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return n >= 2
  }
  return isPrime(num - 2) || isPrime(num + 2)
}