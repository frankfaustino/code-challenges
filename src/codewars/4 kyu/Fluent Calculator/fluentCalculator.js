// Source : https://www.codewars.com/kata/fluent-calculator-1/train/javascript
// Author : Frank Faustino
// Date   : 2019-01-05

class Magic {
  constructor() {
    let value = 0

    const operators = {
      plus: (a, b) => a + b,
      minus: (a, b) => a - b,
      times: (a, b) => a * b,
      dividedBy: (a, b) => a / b
    }

    const numbers = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten'
    ]

    Object.keys(operators).forEach(operator => {
      const operatorFunction = operators[operator]
      const operatorObject = {}

      numbers.forEach((num, index) => {
        Object.defineProperty(operatorObject, num, {
          get: () => (value = operatorFunction(value, index))
        })
      })

      Number.prototype[operator] = operatorObject
    })

    numbers.forEach((num, index) => {
      Object.defineProperty(this, num, {
        get: () => {
          value = index
          return Number(index)
        }
      })
    })
  }
}

module.exports = Magic