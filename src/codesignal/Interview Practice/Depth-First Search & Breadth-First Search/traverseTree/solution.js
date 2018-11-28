// Source : https://app.codesignal.com/interview-practice/task/PhNPP45hZGNwpPchi
// Author : Frank Faustino
// Date   : 2018-11-27
// Lang   : JavaScript

function traverseTree(t) {
  const output = []
  const queue = []
  queue.push(t)

  while (queue.length > 0) {
    const node = queue.shift()
    if (node) {
      output.push(node.value)
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return output
}

module.exports = traverseTree
