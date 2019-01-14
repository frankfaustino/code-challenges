// Source : https://app.codesignal.com/interview-practice/task/TG4tEMPnAc3PnzRCs
// Author : Frank Faustino
// Date   : 2019-01-13

// Using pre-order traversal, decrement node's value from given sum.
// Once we reach a leaf node, check if sum of nodes equals 0.
// If any of the recursive calls returns true, we've found a path.
function hasPathWithGivenSum(node, sum) {
  if (!node) {
    return false
  }

  sum -= node.value

  if (!node.left && !node.right) {
    return sum === 0
  }

  return hasPathWithGivenSum(node.left, sum) || hasPathWithGivenSum(node.right, sum)
}

module.exports = hasPathWithGivenSum
