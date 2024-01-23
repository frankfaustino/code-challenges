// Source : https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Author : Frank Faustino
// Date   : 2024-01-22

// Time complexity  : O(n log n)
// Space complexity : O(1)
// const moveZeros = arr => arr.sort((_, e) => e === 0 ? -1 : 0)

// Time complexity  : O(n)
// Space complexity : O(n)
function moveZeros(arr) {
    const left = arr.filter(e => e !== 0)
    return [...left, ...Array(arr.length - left.length).fill(0)]
}

module.exports = moveZeros

