const isBalanced = (s) => {
  const brackets = { '{': '}', '[': ']', '(': ')' }
  const closed = new Set(['}', ']', ')'])
  const stack = []

  for (const char of s) {
      if (brackets[stack[stack.length - 1]] === char) {
          // Check if last item in stack is a pair for the current closing bracket
          // Remove if true
          stack.pop()
      } else if (char in brackets) {
          // If current character is an opening bracket
          // Append to the stack
          stack.push(char)
      } else if (closed.has(char)) {
          // Else if the current character is a closing bracket with no pair
          // return false
          return 'NO'
      }
  }

  return stack.length < 1 ? 'YES' : 'NO'
}

module.exports = isBalanced