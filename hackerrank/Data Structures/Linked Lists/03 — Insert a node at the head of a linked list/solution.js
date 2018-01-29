// Source : https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem
// Author : Frank Faustino
// Date   : 2018-01-28
// Lang   : JavaScript

const insert = (head, data) => {
    const node = new Node(data)

    node.next = head
    return node
}