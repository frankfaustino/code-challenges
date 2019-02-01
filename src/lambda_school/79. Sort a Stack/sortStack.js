// Title  : sortStack
// Author : Frank Faustino
// Date   : 2019-01-31

// Time and space complexity: O(n)
function sortStack(s) {
  const output = new Stack()

  while (!s.isEmpty()) {
    const current = s.pop()

    while (output.peek() > current) {
      s.push(output.pop())
    }
    output.push(current)
  }
  return output
}

class Stack {
  constructor() {
    this.storage = []
  }

  push(item) {
    this.storage.push(item)
  }

  pop() {
    return this.storage.pop()
  }

  peek() {
    return this.storage[this.storage.length-1]
  }

  isEmpty() {
    return this.storage.length === 0
  }

  printContents() {
    this.storage.forEach(elem => console.log(elem))
  }
}

module.exports = { sortStack, Stack }