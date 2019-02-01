// Title  : Depth-First Search
// Author : Frank Faustino
// Date   : 2019-01-30

class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }
}

function dfsIterative(node, callback) {
  const stack = [node]

  while (stack.length) {
    const current = stack.pop()
    callback(current.value)

    if (current.right) {
      stack.push(current.right)
    }
    if (current.left) {
      stack.push(current.left)
    }
  }
}

const wrappingObject = {
  dfsRecursive: (node, callback) => {
    callback(node.value)
    if (node.left) {
      wrappingObject.dfsRecursive(node.left, callback)
    }
    if (node.right) {
      wrappingObject.dfsRecursive(node.right, callback)
    }
  }
}

module.exports = { BinaryTreeNode, dfsIterative, wrappingObject }