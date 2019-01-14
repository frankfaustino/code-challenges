// Source : https://app.codesignal.com/interview-practice/task/tXN6wQsTknDT6bNrf
// Author : Frank Faustino
// Date   : 2019-01-14

// level-order traversal with two queues
function isTreeSymmetric(t) {
  if (!t) {
    return true
  }
  const left = []
  const right = []

  left.push(t.left)
  right.push(t.right)

  while (left.length && right.length) {
    const l = left.shift()
    const r = right.shift()

    if (!l && !r) {
      continue
    } else if (!l || !r || l.value !== r.value) {
      return false
    } else {
      left.push(l.left, l.right)
      right.push(r.right, r.left)
    }
  }
  return true
}

// recursion
function isTreeSymmetricRecursive(t) {
  if (!t) {
    return true
  }
  return traverse(t.left, t.right)
}

function traverse(t1, t2) {
  if (!t1 && !t2) {
    return true
  }
  if (!t1 || !t2 || t1.value != t2.value) {
    return false
  }
  return traverse(t1.left, t2.right) && traverse(t1.right, t2.left)
}

module.exports = { isTreeSymmetric, isTreeSymmetricRecursive }