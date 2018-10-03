// Source : https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem
// Author : Frank Faustino
// Date   : 2018-01-19
// Lang   : JavaScript

/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

const insert = (head, data) => {
  if (!head) head = new Node(data)
  let current = head
  while (current.next) {
    current = current.next
  }
  current.next = new Node(data)
  return head
}


