// Source : https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
// Author : Frank Faustino
// Date   : 2024-02-01

// Time complexity  : O(n log n)
// Space complexity : O(1)
function minSum(arr) {
    arr.sort((a, b) => a - b)
    let sum = 0
    let i = 0
    let j = arr.length - 1

    while (i < arr.length / 2) {
        sum += arr[i] * arr[j]
        i++
        j--
    }

    return sum
}

// Fancy pants solution
// const minSum = arr => arr
    // .sort((a, b) => a - b)
    // .reduce((sum, val) => sum + val * arr.pop(), 0)

module.exports = minSum

