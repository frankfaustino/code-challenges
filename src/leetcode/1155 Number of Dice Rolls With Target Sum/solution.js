/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
function numRollsToTarget(n, k, target) {
    function findWays(memo, diceIndex, sum) {
        if (diceIndex === n) {
            // after iterating over all the dice,
            // we can check if the current sum is equal to the target
            if (sum === target) {
                // if they are equal, we will increment the variable representing the number of possible ways
                return 1
            }
            return 0
        }

        // if we've already calculated the answer, skip recursion
        // console.log(diceIndex, sum)
        if (memo[diceIndex][sum] !== undefined) return memo[diceIndex][sum]

        // iterate over the numbers 1 to k or up until the target
        let face = 1
        let ways = 0
        while (face <= Math.min(k, target - sum)) {
            // add it to a variable to keep the current sum
            // recursively move to the next dice
            ways = (ways + findWays(memo, diceIndex + 1, sum + face)) % (Math.pow(10, 9) + 7)
            // console.log(face, diceIndex, ways)
            face++
        }
        return memo[diceIndex][sum] = ways
    }

    const memo = Array.from({ length: n + 1 }, _ => new Array(target + 1))
    return findWays(memo, 0, 0)
}

console.log(numRollsToTarget(1, 6, 3))
console.log(numRollsToTarget(2, 6, 7))
console.log(numRollsToTarget(30, 30, 500))
