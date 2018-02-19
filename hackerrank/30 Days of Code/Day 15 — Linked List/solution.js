// Source : https://www.hackerrank.com/challenges/30-linked-list/
// Author : Frank Faustino
// Date   : 2018-02-18
// Lang   : JavaScript

function Solution() {
  this.insert = (head, data) => {
    if (head === null) return new Node(data)

    let current = head
    while (current.next) {
      current = current.next
    }
    current.next = new Node(data)

    return head
  }
}
