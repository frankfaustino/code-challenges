/**
 * Time complexity: O(n)
 * Space complexity: O(n) [not including the output array]
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
    const output = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        output.push(nums[i] + output[i - 1])
    }
    return output
}

runningSum([1,2,3,4]) // [1,3,6,10]
runningSum([1,1,1,1,1]) // [1,2,3,4,5]
runningSum([3,1,2,10,1]) // [3,4,6,16,17]
