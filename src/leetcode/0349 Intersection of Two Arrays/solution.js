// Source : https://leetcode.com/problems/intersection-of-two-arrays/
// Author : Frank Faustino
// Date   : 2024-03-09

// Time Complexity  : O(n + m)
// Space Complexity : O(n + m)
function intersection(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    return Array.from(set2).filter(v => set1.has(v))
}

module.exports = intersection

