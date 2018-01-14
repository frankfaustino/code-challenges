// Source : https://leetcode.com/problems/two-sum/
// Author : Frank Faustino
// Date   : 2019-01-02

// Time complexity: O(n)
// Space complexity: O(n)

const twoSum = (nums, target) => {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (diff in obj) return [obj[diff], i]
    obj[nums[i]] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 100], 102))