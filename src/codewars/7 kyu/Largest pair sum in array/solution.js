// Source : https://www.codewars.com/kata/556196a6091a7e7f58000018
// Author : Frank Faustino
// Date   : 2024-02-09

// Time complexity  : O(n log n)
// Space complexity : O(n)
function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers[0] + numbers[1]
}

module.exports = largestPairSum

