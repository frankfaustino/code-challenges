export default class BinaryTreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function makeBinaryTree(array) {
    if (!array) return null

    const tree = new BinaryTreeNode(array[0])

    for (const num of array) {
        let node = tree

        while (node.val !== num) {
            let key = num < node.val ? 'left' : 'right'

            if (!node[key]) {
                node[key] = new BinaryTreeNode(num)
                break
            }

            node = node[key]
        }
    }

    return tree
}
