// Source : hhttps://app.codesignal.com/interview-practice/task/m9vC4ALaAeudkwRTF
// Author : Frank Faustino
// Date   : 2018-11-28
// Lang   : JavaScript

// Recursive solution
function largestValuesInTreeRows(t, depth = 0, output = []) {
  if (t) {
    output[depth] = output[depth] ? Math.max(output[depth], t.value) : t.value

    largestValuesInTreeRows(t.left, depth + 1, output)
    largestValuesInTreeRows(t.right, depth + 1, output)
  }

  return output
}

// Iterative solution
function largestValuesInTreeRows(t) {
  const output = []
  let queue = t ? [t] : []

  while (queue.length > 0) {
      const row = queue
      queue = []
      let max = -Infinity

      row.forEach(node => {
          max = Math.max(max, node.value)
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
      })

      output.push(max)
  }

  return output
}

module.exports = largestValuesInTreeRows
