// Source : https://www.codewars.com/kata/5a7893ef0025e9eb50000013
// Author : Frank Faustino
// Date   : 2024-02-03

// Time complexity  : O(n log n)
// Space complexity : O(1)
function maxGap (numbers) {
    numbers = numbers.sort((a, b) => a - b)
    let maxDiff = 0

    for (let i = 1; i < numbers.length; i++) {
        const diff = Math.abs(numbers[i] - numbers[i-1])
        if (diff > maxDiff) maxDiff = diff
    }

    return maxDiff
}

module.exports = maxGap

