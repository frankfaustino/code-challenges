const solution = require('../solution')
const reverseList = require('../reverseLinkedList')

class LinkedListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function valuesToLinkedListNodes(values) {
  const nodes = []
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i])
    if (i > 0) {
      nodes[i - 1].next = node
    }
    nodes.push(node)
  }
  return nodes
}

function isListReversed(list, originalNodes) {
  let i = originalNodes.length - 1
  while (list != null && i >= 0) {
    if (originalNodes[i] != list) {
      return false
    }
    list = list.next
    i--
  }
  return list == null
}


const tests = (f) => {
  test('Short linked list', () => {
    let nodes = valuesToLinkedListNodes([1, 2])
    let reversedList = f(nodes[0])
    expect(reversedList && isListReversed(reversedList, nodes)).toBe(true)
  })

  test('Long linked list', () => {
    let nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5, 6])
    let reversedList = f(nodes[0])
    expect(reversedList && isListReversed(reversedList, nodes)).toBe(true)
  })

  test('One element linked list', () => {
    const node = new LinkedListNode(1)
    let reversedList = f(node)
    expect(reversedList && node.value === reversedList.value && node.next === reversedList.next).toBe(true)
  })

  test('Empty linked list', () => {
    let reversedList = f(null)
    expect(reversedList).toBe(null)
  })
}

describe('Reverse a Linked List — Solution', () => {
  tests(solution)
})

describe('Reverse a Linked List — Your code', () => {
  tests(reverseList)
})