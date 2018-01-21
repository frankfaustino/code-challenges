// Source : https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem
// Author : Frank Faustino
// Date   : 2018-01-19
// Lang   : JavaScript

/* Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}
*/
// This is a "method-only" submission.
// You only need to complete this method.

const print = (head) => {
  let current = head
  while (current) {
    console.log(current.data)
    current = current.next
  }
}
