// Source : https://www.codewars.com/kata/56a1c63f3bc6827e13000006/javascript
// Author : Frank Faustino
// Date   : 2024-01-19

// Time complexity  : O(n log n)
// Space complexity : O(n)
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
        this.count = 0
        this.dup = 1
    }
}

function insert(root, num, result, sum, i) {
    if (root === null) {
        result[i] = sum
        return new Node(num)
    }

    if (root.data === num) {
        root.dup++
        result[i] = sum + root.count
    } else if (root.data > num) {
        root.count++
        root.left = insert(root.left, num, result, sum, i)
    } else {
        root.right = insert(root.right, num, result, sum + root.count + root.dup, i)
    }
    return root
}

function smaller(arr) {
    const result = Array(arr.length).fill(0)
    let root = null

    for (let i = arr.length; i--;)
        root = insert(root, arr[i], result, 0, i)

    return result
}

module.exports = smaller

