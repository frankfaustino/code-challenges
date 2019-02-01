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

// Test cases
const s = new Stack()
s.push(10)
s.push(4)

let sortedStack = sortStack(s) // sortedStack is also a Stack instance
sortedStack.printContents() // 4, 10

s.push(8)
s.push(5)
s.push(1)
s.push(6)
s.push(19)
s.push(4)

sortedStack = sortStack(s)
sortedStack.printContents() // 1, 4, 5, 6, 8, 19