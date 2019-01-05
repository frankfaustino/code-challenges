// Source : https://www.codewars.com/kata/binary-tree-traversal/javascript
// Author : Frank Faustino
// Date   : 2019-01-05

function preOrder(node, arr = []) {
  arr.push(node.data)
  if (node.left) {
    preOrder(node.left, arr)
  }
  if (node.right) {
    preOrder(node.right, arr)
  }
  return arr
}

function inOrder(node, arr = []) {
  if (node.left) {
    inOrder(node.left, arr)
  }
  arr.push(node.data)
  if (node.right) {
    inOrder(node.right, arr)
  }
  return arr
}

function postOrder(node, arr = []) {
  if (node.left) {
    postOrder(node.left, arr)
  }
  if (node.right) {
    postOrder(node.right, arr)
  }
  arr.push(node.data)
  return arr
}

// iterative
// function preOrder(node) {
//   const output = []
//   const stack = [node]

//   while (stack.length) {
//     node = stack.pop()
//     output.push(node.data)
//     if (node.right) {
//       stack.push(node.right)
//     }
//     if (node.left) {
//       stack.push(node.left)
//     }
//   }
//   return output
// }

// function inOrder(node) {
//   const output = []
//   const stack = [node]

//   while ((node = node.left)) {
//     stack.push(node)
//   }
//   while (stack.length) {
//     node = stack.pop()
//     output.push(node.data)
//     if ((node = node.right)) {
//       stack.push(node)
//       while ((node = node.left)) {
//         stack.push(node)
//       }
//     }
//   }
//   return output
// }

// function postOrder(node) {
//   const output = []
//   const stack = [node]

//   while (stack.length) {
//     node = stack.pop()
//     output.push(node.data)
//     if (node.left) {
//       stack.push(node.left)
//     }
//     if (node.right) {
//       stack.push(node.right)
//     }
//   }
//   return output.reverse()
// }

module.exports = {
  preOrder,
  inOrder,
  postOrder
}
