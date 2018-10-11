// Title  : Balanced Brackets
// Author : Frank Faustino
// Date   : 2018-04-19
// Lang   : JavaScript

// Time complexity: O(n)
// Space complexity: O(n)
// A stack data structure can be used to keep track of the most recently seen,
// unclosed open bracket.
function balancedBrackets(code) {
  const brackets = { '(': ')', '{': '}', '[': ']' }
  const closed = new Set([')', '}', ']'])
  const stack = []

  for (let bracket of code) {
    if (brackets[stack[stack.length - 1]] === bracket) {
      stack.pop()
    } else if (bracket in brackets) {
      stack.push(bracket)
    } else if (closed.has(bracket)){
      return false
    }
  }
  return stack.length === 0
}

// Old solution
const balancedBrackets_2 = str => {
  let output = true
  const open = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const close = {
    '}': true,
    ']': true,
    ')': true
  }
  const seen = []

  for (let bracket of str) {
    if (open[bracket]) seen.push(bracket)
    else if (close[bracket] && open[seen.pop()] !== bracket) output = false
  }

  return output && str.length > 1
}

module.exports = balancedBrackets
