// Source : https://leetcode.com/problems/valid-parentheses/
// Author : Frank Faustino
// Date   : 2018-12-12
// Lang   : JavaScript

// a) O(n) recursive
const isValid = function(s) {
  const brackets = { '{': '}', '(': ')', '[': ']' }
  const closed = new Set(['}', ')', ']'])

  const recursive = function(s, stack = []) {
    if (s.length < 1) {
      return !stack.length
    } else if (s[0] in brackets) {
      stack.push(s[0])
      return recursive(s.slice(1), stack)
    } else if (s[0] === brackets[stack[stack.length - 1]]) {
      stack.pop()
      return recursive(s.slice(1), stack)
    } else if (closed.has(s[0])) {
      return false
    }
  }

  return recursive(s)
}

// b) O(n) iterative
const isValid = function(s) {
  const brackets = { '{': '}', '(': ')', '[': ']' }
  const closed = new Set(['}', ')', ']'])
  const stack = []

  for (let char of s) {
    if (char in brackets) {
      stack.push(char)
    } else if (char === brackets[stack[stack.length - 1]]) {
      stack.pop()
    } else if (closed.has(char)) {
      return false
    }
  }

  return stack.length === 0
}
