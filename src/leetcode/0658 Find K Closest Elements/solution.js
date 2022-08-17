/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
    let left = 0
    let right = arr.length - 1
    while (right - left >= k) {
        // a-x <= b-x
        if (x - arr[left] <= arr[right] - x) right--
        else left++
    }
    return arr.slice(left, right + 1)
}

// 😐
// console.log(findClosestElements([1,2,3,4,5], 4, 3)) // [1,2,3,4]
// console.log(findClosestElements([1,2,3,4,5], 4, -1)) // [1,2,3,4]
