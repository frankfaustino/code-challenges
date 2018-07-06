// Source : https://codewars.com/kata/convert-a-linked-list-to-a-string
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

// Solution a) recursion
const stringify = list =>
  list ? `${list.data} -> ${stringify(list.next)}` : 'null'

// Solution b) while loop
const stringify = list => {
  let output = ''

  while (list) {
    output += `${list.data} -> `
    list = list.next
  }

  return output + 'null'
}

// Test cases
// "1 -> 2 -> 3 -> null"
stringify(new Node(1, new Node(2, new Node(3))))

// "0 -> 1 -> 4 -> 9 -> 16 -> null"
stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))

// "null"
stringify(null)
