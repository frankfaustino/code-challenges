class LinkedListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function reverseList(headOfList) {
  let node = headOfList
  let prevNode = null

  while (node) {
    const { next } = node
    node.next = prevNode
    prevNode = node
    node = next
  }

  return prevNode
}

module.exports = reverseList
