// Source : https://www.codewars.com/kata/multiplying-numbers-as-strings/javascript
// Author : Frank Faustino
// Date   : 2019-01-06

function multiply(a, b) {
  if (a == '0' || b == '0') {
    return '0'
  }

  a = a.split('').reverse()
  b = b.split('').reverse()
  const output = []

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      const product = a[i] * b[j]
      output[i + j] = (output[i + j] || 0) + product
    }
  }

  for (let i = 0; i <= output.length; i++) {
    if (output[i] >= 10) {
      if (!output[i + 1]) {
        output[i + 1] = 0
      }

      output[i + 1] += Math.floor(output[i] / 10)
      output[i] %= 10
    }
  }

  return output.reverse().join('').replace(/^0+/, '')
}

module.exports = multiply
