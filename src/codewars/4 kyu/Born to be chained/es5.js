// Source : https://www.codewars.com/kata/born-to-be-chained/train/javascript
// Author : Frank Faustino
// Date   : 2019-01-06

function Functions(fns, state = undefined) {
  this.state = state

  for (const key in fns) {
    Functions.prototype[key] = function() {
      const args = [].slice.call(arguments)
      if (this.state) {
        args.unshift(this.state)
      }
      return new Functions(fns, fns[key].apply(null, args))
    }
  }
}

Functions.prototype.execute = function() {
  return this.state
}

function chain(fns) {
  return new Functions(fns)
}

module.exports = chain