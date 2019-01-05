const {
  preOrder,
  inOrder,
  postOrder
} = require('../binaryTreeTraversal')

class BinaryTreeNode {
  constructor(data = null) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const root = new BinaryTreeNode(5)
root.left = new BinaryTreeNode(10)
root.right = new BinaryTreeNode(2)
root.left.left = new BinaryTreeNode(6)
root.left.right = new BinaryTreeNode(8)
root.right.left = new BinaryTreeNode(7)
root.right.right = new BinaryTreeNode(1)

describe('Codewars — Binary Tree Traversal', () => {
  test('Pre-order', () => {
    expect(preOrder(root)).toEqual([5, 10, 6, 8, 2, 7, 1])
  })
  test('In-order', () => {
    expect(inOrder(root)).toEqual([6, 10, 8, 5, 7, 2, 1])
  })
  test('Post-order', () => {
    expect(postOrder(root)).toEqual([6, 8, 10, 7, 1, 2, 5])
  })
})