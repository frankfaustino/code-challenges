# Reversed Linked List

Write a function that will take the head of a singly-linked list, and reverse it, such that the head is now the tail, and the node that head pointed to now points to the old head (the new tail).

#### Example:

```js
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const NodeA = new Node('A')
const NodeB = new Node('B')
const NodeC = new Node('C')
const NodeD = new Node('D')

NodeA.next = NodeB
NodeB.next = NodeC
NodeC.next = NodeD
reverseList(NodeA)
expect(NodeD.next).toBe(NodeC)
expect(NodeC.next).toBe(NodeB)
expect(NodeB.next).toBe(NodeA)
```