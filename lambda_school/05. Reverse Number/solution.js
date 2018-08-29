// Title  : Reverse Number
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript
// Perf   : https://jsperf.com/reversenumber-test/

// a. arithmetic operators and while loop
const reverseNumber = n => {
  let reversed = 0

  while (n > 0) {
    // shift reversed by one place value
    // so we can add to the ones’ place (1 -> 10 -> 12)
    reversed *= 10
    // add the last digit of n (remainder of n / 10) to reversed
    reversed += n % 10
    // subtract the last digit of n from n (123 -> 120)
    n -= n % 10
    // remove the ones' place value from n (120 -> 12)
    n /= 10
  }

  return reversed
}


// b. arithmetic operators and for loop
const reverseNumber = n => {
  let reversed = 0

  for(; n; n = parseInt(n / 10)) {
    reversed *= 10
    reversed += n % 10
  }

  return reversed
}

// c. toString, split, reverse, join
const reverseNumber = n => Number(n.toString().split('').reverse().join(''))

// d. toString, split, for loop
const reverseNumber = n => {
  const arr = n.toString().split('')
  let reversed = ''

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed += arr[i]
  }

  return +reversed
}
