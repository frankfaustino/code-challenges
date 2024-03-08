// Source : https://leetcode.com/problems/count-elements-with-maximum-frequency/
// Author : Frank Faustino
// Date   : 2024-03-07

// Time complexity  : O(n)
// Space complexity : O(n)
function maxFrequencyElements(nums) {
    const frequency = {}
    nums.forEach(n => frequency[n] = (frequency[n] || 0) + 1)

    let max = 0
    Object.values(frequency).forEach(f => max = Math.max(f, max))

    return Object.values(frequency).reduce((sum, f) => {
        if (f === max) return sum += f
        return sum
    }, 0)
}

module.exports = maxFrequencyElements

console.log(maxFrequencyElements([1,2,2,3,1,4])) // 4
console.log(maxFrequencyElements([1,2,3,4,5])) // 5
