/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * Time complexity: O(N)
 * Space complexity: O(log N)
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
    if (!root) return false

    const stack = [[root, targetSum - root.val]]

    while (stack.length) {
        const [current, currentSum] = stack.pop()

        // we've reached the end of a root-to-leaf path and the targetSum
        if (!current.left && !current.right && currentSum === 0) return true
        // otherwise, keep traversing the binary tree while keeping track
        // of the remaining sum
        if (current.right) {
            stack.push([current.right, currentSum - current.right.val])
        }
        if (current.left) {
            stack.push([current.left, currentSum - current.left.val])
        }
    }
    return false
}

function hasPathSumRecursive(root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) return targetSum === root.val
    else return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

let root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(1))))
console.log(hasPathSum(root, 22)) // true

root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(hasPathSum(root, 5)) // false

root = new TreeNode(1, new TreeNode(2))
console.log(hasPathSum(root, 1)) // false

root = null
console.log(hasPathSum(root, 1)) // false

root = new TreeNode(1)
console.log(hasPathSum(root, 1)) // true

root = new TreeNode(-2, null, new TreeNode(-3))
console.log(hasPathSum(root, -3)) // false

