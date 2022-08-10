// Source : https://leetcode.com/problems/contains-duplicate
// Author : Frank Faustino
// Date   : 2022-08-02

// Time complexity: O(n²)

const containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
}

console.log(containsDuplicate([1, 2, 3, 4]))