// Title  : Reverse String
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript

// a) recursion
const reverseString = str => str ? (reverseString(str.substr(1)) + str[0]) : str

// b) while loop
const reverseString =
  (str, i = str.length - 1, output = '') => {
    while (i >= 0) {
      output += str[i]
      i--
    }

    return output
  }

// c) for loop
const reverseString = str => {
  let output = ''

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i]
  }

  return output
}

// d) built-in methods
const reverseString = str => str.split('').reverse().join('')
