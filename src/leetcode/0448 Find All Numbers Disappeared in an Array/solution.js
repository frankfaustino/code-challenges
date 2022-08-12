/**
 * Time complexity: O(n)
 * Space complexity: O(2n)
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    const output = []
    const set = new Set(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) output.push(i)
    }
    return output
}

console.log(findDisappearedNumbers([1,1]))
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
