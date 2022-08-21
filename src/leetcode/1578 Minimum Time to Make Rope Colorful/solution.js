/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
function minCost(colors, neededTime) {
    const l = colors.length
    let totalTime = 0
    let i = 0
    let j = 0

    while (i < l && j < l) {
        if (colors[i] === colors[j]) {
            let curTotal = 0
            let curMax = 0

            while (j < l && colors[i] === colors[j]) {
                curTotal += neededTime[j]
                curMax = Math.max(curMax, neededTime[j])
                j++
            }

            totalTime += curTotal - curMax
            i = j
        }
    }

    return totalTime
}

// console.log(minCost('abaac', [1,2,3,4,5])) // 3
// console.log(minCost('abc', [1,2,3])) // 0
// console.log(minCost('aabaa', [1,2,3,4,1])) // 2
// console.log(minCost('bbbaaa', [4,9,3,8,8,9])) // 23
// console.log(minCost('aaabbbabbbb', [3,5,10,7,5,3,5,5,4,8,1])) // 26
