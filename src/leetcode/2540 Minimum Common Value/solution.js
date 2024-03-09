// Source : https://leetcode.com/problems/minimum-common-value/
// Author : Frank Faustino
// Date   : 2024-03-08
// Tags   : two-pointers

// Time complexity  : O(n)
// Space complexity : O(1)
function getCommon(nums1, nums2) {
    let i = 0
    let j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) return nums1[i]
        else if (nums1[i] < nums2[j]) i++
        else j++
    }
    return -1
}

module.exports = getCommon

