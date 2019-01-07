// Source : https://www.codewars.com/kata/born-to-be-chained/train/javascript
// Author : Frank Faustino
// Date   : 2019-01-06

class Functions {
  constructor(fns, state = undefined) {
    this.fns = fns
    this.state = state
    Object.entries(this.fns).forEach(([key, fn]) => {
      this[key] = (...args) => {
        let state = this.state ? fn(this.state, ...args) : fn(...args)
        return new Functions(this.fns, state)
      }
    })
  }

  execute() {
    return this.state
  }
}

const chain = fns => new Functions(fns)

module.exports = chain