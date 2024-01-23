// Source : https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Author : Frank Faustino
// Date   : 2024-01-22

// Time complexity  : O(n)
// Space complexity : O(n)
function moveZeros(arr) {
    const left = []
    const right = []

    arr.forEach(e => e === 0 ? right.push(e) : left.push(e))

    return [...left, ...right]
}

module.exports = moveZeros

