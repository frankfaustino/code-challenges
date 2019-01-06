function validBraces(string) {
  const stack = []
  const braces = new Map([['(', ')'], ['{', '}'], ['[', ']']])
  const closed = new Map([[')', true], ['}', true], [']', true]])

  for (const char of string) {
    if (braces.has(char)) {
      stack.push(char)
    } else if (closed.get(char)) {
      if (braces.get(stack[stack.length - 1]) === char) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

module.exports = validBraces