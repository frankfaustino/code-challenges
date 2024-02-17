// Source : https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// Author : Frank Faustino
// Date   : 2024-02-16

// Time complexity  : O(n)
// Space complexity : O(n)
function removeSmallest(numbers) {
    let min = Infinity
    let minIndex
    // find the smallest number, track its index
    numbers.forEach((n, i) => {
        if (n < min) {
            min = n
            minIndex = i
        }
    })
    // remove the smallest number from the array, return array
    return numbers.filter((_, i) => minIndex !== i)
}

module.exports = removeSmallest

