// Source : https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
// Author : Frank Faustino
// Date   : 2024-01-19

function smaller(nums) {
    return nums.map((n, index) => {
        let count = 0
        for (let i = index + 1; i < nums.length; i++) {
            if (n > nums[i]) {
                count++
            }
        }
        return count
    })
}

module.exports = smaller

