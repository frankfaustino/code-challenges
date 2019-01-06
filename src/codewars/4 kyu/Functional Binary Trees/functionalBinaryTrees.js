// Source : https://www.codewars.com/kata/functional-binary-trees
// Author : Frank Faustino
// Date . : 2019-01-05

class BinaryTree {
  constructor() {}
}

class BinaryTreeNode extends BinaryTree {
  constructor(value, left, right) {
    super()
    this.value = value
    this.left = left
    this.right = right
    Object.freeze(this)
  }

  isEmpty() {
    return false
  }
  depth() {
    return 1 + Math.max(this.left.depth(), this.right.depth())
  }
  count() {
    return 1 + this.left.count() + this.right.count()
  }
  inorder(fn) {
    this.left.inorder(fn)
    fn(this.value)
    this.right.inorder(fn)
  }
  preorder(fn) {
    fn(this.value)
    this.left.preorder(fn)
    this.right.preorder(fn)
  }
  postorder(fn) {
    this.left.postorder(fn)
    this.right.postorder(fn)
    fn(this.value)
  }
  contains(x) {
    if (this.value === x) {
      return true
    }
    return this.value < x ? this.right.contains(x) : this.left.contains(x)
  }
  insert(x) {
    if (x instanceof BinaryTreeNode) {
      if (this.left.isEmpty() || x.value <= this.left.value) {
        return new BinaryTreeNode(this.value, this.left.insert(x), this.right)
      } else {
        return new BinaryTreeNode(this.value, this.left, this.right.insert(x))
      }
    }

    if (x <= this.value) {
      return new BinaryTreeNode(this.value, this.left.insert(x), this.right)
    } else {
      return new BinaryTreeNode(this.value, this.left, this.right.insert(x))
    }
  }
  remove(x) {
    let tmp
    if (x < this.value) {
      tmp = this.left.remove(x)
      return tmp === this.left
        ? this
        : new BinaryTreeNode(this.value, tmp, this.right)
    }
    if (x > this.value) {
      tmp = this.right.remove(x)
      return tmp === this.right
        ? this
        : new BinaryTreeNode(this.value, this.left, tmp)
    }
    if (this.value === x) {
      if (!this.left.isEmpty() && this.right.isEmpty())
        return new BinaryTreeNode(
          this.left.value,
          this.left.left,
          this.left.right
        )
      if (this.left.isEmpty() && !this.right.isEmpty())
        return new BinaryTreeNode(
          this.right.value,
          this.right.left,
          this.right.right
        )
      if (this.left.isEmpty() && this.right.isEmpty()) return this.left
      if (!this.left.isEmpty() && !this.right.isEmpty()) {
        return this.right.insert(this.left)
      }
    }
  }
}

class EmptyBinaryTree extends BinaryTreeNode {
  constructor() {
    super()
    Object.freeze(this)
  }

  isEmpty() {
    return true
  }
  depth() {
    return 0
  }
  count() {
    return 0
  }
  inorder(fn) {}
  preorder(fn) {}
  postorder(fn) {}
  contains(x) {
    return false
  }
  insert(x) {
    return x instanceof BinaryTreeNode
      ? x
      : new BinaryTreeNode(x, new EmptyBinaryTree(), new EmptyBinaryTree())
  }
  remove(x) {
    return this
  }
}

module.exports = EmptyBinaryTree