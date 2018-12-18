/**
 * Write a function that accepts a string of parenthesis
 * return true if they are "balanced", false otherwise
 */

function isBalanced(arr) {
  const open = {}
  const close = new Set([])

  arr.forEach(([openBracket, closeBracket]) => {
    open[openBracket] = closeBracket
    close.add(closeBracket)
  })

  return str => {
    const stack = []

    for (let char of str) {
      if (char in open) {
        stack.push(char)
      } else if (close.has(char)) {
        if (char === open[stack[stack.length - 1]]) {
          stack.pop()
        } else {
          return false
        }
      }
    }

    return stack.length === 0
  }
}

// console.log(isBalanced('()()')) // true
// console.log(isBalanced('(())')) // true
// console.log(isBalanced(')()')) // false
// console.log(isBalanced('([]){}')) // true
// console.log(isBalanced('()[{}')) // false
// console.log(isBalanced('([)]')) // false

/**
 * Follow-up question:
 * What if we changed the function signature so that it accepts an array
 * with arrays of matching brackets and an IIFE that accepts a string?
 * (pairs: [['(', ')'],...]) => (str: string) => boolean
 * '([]){}' => true
 * '()[{}' => false
 * '([)]' => false
 */

console.log(isBalanced([['(', ')']])('()()')) // true

