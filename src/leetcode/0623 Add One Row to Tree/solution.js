import TreeNode from '../../data_structures/BinaryTreeNode.js'

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
function addOneRow(root, val, depth) {
    // there is no depth-1, val is the new root
    if (depth === 1) return new TreeNode(val, root, null)
    if (depth === 2) {
        root.left = new TreeNode(val, root.left, null)
        root.right = new TreeNode(val, null, root.right)
    } else {
        if (root.left) addOneRow(root.left, val, depth - 1)
        if (root.right) addOneRow(root.right, val, depth - 1)
    }
    return root   
}

// Input: root = [4,2,6,3,1,5], val = 1, depth = 2
// Output: [4,1,1,2,null,null,6,3,1,5]
let root = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)), new TreeNode(6, new TreeNode(5)))
console.log(addOneRow(root, 1, 2))

// Input: root = [4,2,null,3,1], val = 1, depth = 3
// Output: [4,2,null,1,1,3,null,null,1]
root = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)), null)
console.log(addOneRow(root, 1, 3))
