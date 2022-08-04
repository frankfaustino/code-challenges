/**
 * We can simply get the count of odd numbers by dividing the range (high - low) by 2.
 * In case either high or low are odd numbers, we add 1 to extend the range.
 * E.g., low=3, high=8, range=8-3=5 (4,5,6,7,8), since low is odd we'll add 1 to the count.
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @param {number} low
 * @param {number} high
 * @return {number} count
 */
 function countOdds(low, high) {
    return Math.floor((high - low) / 2) + (high % 2 || low % 2)
}

/**
 * Naive solution incrementing from low to high,
 * while tallying the count of odd numbers along the way.
 * Time complexity: O(high-low) or O(n)
 * Space complexity: O(1)
 * @param {number} low
 * @param {number} high
 * @return {number} count
 */
function countOddsLinear(low, high) {
    let count = 0
    while (low <= high) {
        if (low % 2 === 1) count++
        low++
    }
    return count
}

console.log(countOdds(3, 7)) // 3
console.log(countOdds(8, 10)) // 1
console.log(countOdds(3, 8)) // 3
console.log(countOdds(4, 9)) // 3
console.log(countOdds(21, 22)) // 1
