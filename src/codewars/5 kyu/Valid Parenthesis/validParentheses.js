// Source : https://www.codewars.com/kata/valid-parentheses/javascript
// Author : Frank Faustino
// Date   : 2019-01-06

function validParentheses(string) {
  const stack = []
  const parens = new Map([['(', ')']])

  for (let char of string) {
    if (parens.has(char)) {
      stack.push(char)
    } else if (parens.get('(') === char) {
      if (parens.get(stack[stack.length - 1]) === char) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

module.exports = validParentheses