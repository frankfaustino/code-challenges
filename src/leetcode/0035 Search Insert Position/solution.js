/**
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,2,3,4,5,6], 5)) // 4
console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 7)) // 4
console.log(searchInsert([1,3,5,6], 0)) // 0
