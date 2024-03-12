// Source : https://leetcode.com/problems/find-the-pivot-integer
// Author : Frank Faustino
// Date   : 2024-03-12
// Tags   : math, arithmetic-progression

// Time complexity  : O(n)
// Space complexity : O(1)
function pivotInteger(n) {
    // calculate total sum from 1 to n
    const totalSum = n * (n + 1) / 2
    let leftSum = 0
    let l = 1

    while (l <= n) {
        leftSum += l
        const rightSum = totalSum - leftSum + l
        if (leftSum === rightSum) return l
        l++
    }

    return -1
}

module.exports = pivotInteger

