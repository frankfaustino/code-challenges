// Source : hhttps://app.codesignal.com/interview-practice/task/m9vC4ALaAeudkwRTF
// Author : Frank Faustino
// Date   : 2018-11-28
// Lang   : JavaScript

// Recursive solution
function largestValuesInTreeRows(t) {
  const output = []

  const traverse = (current, depth) => {
    if (!current) return

    if (!output[depth]) {
      output[depth] = current.value
    } else {
      output[depth] = Math.max(output[depth], current.value)
    }

    traverse(current.left, depth + 1)
    traverse(current.right, depth + 1)
  }

  traverse(t, 0)

  return output
}

// Iterative solution WIP
// const t = {
//   value: -1,
//   left: {
//     value: 5,
//     left: {
//       value: -1,
//       left: {
//         value: 10,
//         left: null,
//         right: null
//       },
//       right: null
//     },
//     right: null
//   },
//   right: {
//     value: 7,
//     left: null,
//     right: {
//       value: 1,
//       left: {
//         value: 5,
//         left: null,
//         right: null
//       },
//       right: null
//     }
//   }
// }
/*
      -1
      / \
      5   7
    /     \
  -1        1
  /        /
  10       5
Expected [-1, 7, 1, 10]
Output   [-1, 7, 10, 5]
*/
// function largestValuesInTreeRows(t) {
//   const output = []
//   const queue = []
//   queue.push(t)

//   while (queue.length > 0) {
//     const nums = queue.map(val => val.value)
//     console.log('👉', nums)
//     output.push(Math.max(...nums))

//     for (let i = 0; i < queue.length; i++) {
//       const node = queue.shift()
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//     }
//   }

//   return output
// }

module.exports = largestValuesInTreeRows
