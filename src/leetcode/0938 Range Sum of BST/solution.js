import TreeNode, { makeBinaryTree } from '../../data_structures/BinaryTreeNode.js'

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
    const stack = [root]
    let sum = 0

    while (stack.length) {
        const { val, left, right } = stack.pop()
        if (val >= low && val <= high) sum = sum + val
        if (left) stack.push(left)
        if (right) stack.push(right)
    }

    return sum
}

console.log(rangeSumBST(makeBinaryTree([10,5,15,3,7,null,18]), 7, 15), 32)
console.log(rangeSumBST(makeBinaryTree([10,5,15,3,7,13,18,1,null,6]), 6, 10), 23)
