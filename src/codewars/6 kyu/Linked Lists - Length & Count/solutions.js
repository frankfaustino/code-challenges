// Source : https://codewars.com/kata/linked-lists-length-and-count
// Author : Frank Faustino
// Date   : 2018-07-06
// Lang   : JavaScript

// Setup
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// a) recursion
const length = head => head ? 1 + length(head.next) : 0

const count = (head, data) =>
  head ? ((head.data === data ? 1 : 0) + count(head.next, data)) : 0

// b) while loop
const length = (head) => {
  let count = 0

  while (head) {
    count++
    head = head.next
  }

  return count
}

const count = (head, data) => {
  let count = 0

  while (head) {
    if (head.data === data) count++
    head = head.next
  }

  return count
}

// Test cases
const list = new Node(1, new Node(2, new Node(3)))
length(null) // 0
length(new Node(99)) // 1
length(list) // 3
count(list, 1) // 1
count(list, 2) // 1
count(list, 3) // 1
count(list, 99) // 0
count(null, 1) // 0
