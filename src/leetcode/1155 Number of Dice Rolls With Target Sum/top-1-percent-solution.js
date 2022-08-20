/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
/* function numRollsToTarget(n, k, target) {
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
} */

// stack - lifo - push / pop
// n = num dice
// k = faces

// var numRollsToTarget = function(n, k, target) {
//     let count = 0;
    
//     let stack = [[n, target]] // numDice, target
    
//     while (stack.length){
//         let [curNumDice, curTarget] = stack.pop();
        
//         if (curNumDice < 0) continue;
//         if (curNumDice === 0 && curTarget === 0) count++;
       
//         for (let val=1; val <= k; val++){
//             stack.push([curNumDice-1, curTarget-val])
//         }
//     }
    
//     return count % (10**9 + 7);
// };


var numRollsToTarget = (n,k,target, memo={}) => {
    if (`${n},${target}` in memo) return memo[`${n},${target}`];
    
    if (n === 1){
        if (target <= k && target > 0) {
            return 1;
        } else {
            return 0;
        }
    }
    if (n < 1) {
        return 0;
    }
    // start with numDice = n, target = target
    // at each level you subtract 1-6 from the target (and update the numDice)
    let ans = 0; 
    for (let val = 1; val <= k; val++){
        ans+= numRollsToTarget(n-1, k, target-val, memo) 
        ans %= (10**9 + 7)
        console.log(val, n, ans)
    }
    memo[`${n},${target}`] = ans;
    return ans;
    
    // base case
    // if numDice=1
    //    if target <= k and target > 0 return 1 
    //    else return 0
}


// var numRollsToTarget = function(d, f, target) {
//     const dp = [...Array(target+1)].map(() => Array(d+1).fill(0));
//     console.log({dp})
//     const mod = 10**9 + 7;
//     dp[0][0] = 1;
    
//     for(let i = 1; i <= target; i++) {
//         for(let j = 1; j <= d; j++) {
//             for(let k = 1; k <= f; k++) {
//                 if(k > i) break;
//                 dp[i][j] += dp[i-k][j-1] % mod;                
//             }
//         }
//     }
//     console.log({dp})
//     return dp[target][d] % mod;
// };

// console.log(numRollsToTarget(1, 6, 3))
// console.log(numRollsToTarget(2, 6, 7))
console.log(numRollsToTarget(30, 30, 500))
