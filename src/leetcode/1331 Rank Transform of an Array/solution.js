/**
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
    // Approach:
    // - create a sorted copy of the input array
    // - iterate through the sorted array
    // - use a hash map to track ranking
    // - increment i at each elem, increment rank only if the current elem hasn't been seen before
    // - map ranking for each elem in a new array
    const sorted = arr.slice().sort((a, b) => a - b)
    const ranking = {}
    let i = 0
    let rank = 1

    while (i < sorted.length) {
        if (ranking[sorted[i]] === undefined) {
            ranking[sorted[i]] = rank
            rank++
        }
        i++
    }

    return arr.map(n => ranking[n])
}

/**
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransformAlternative(arr) {
    const ranking = [...new Set(arr)]
        .sort((a, b) => a - b)
        .reduce((p, c, i) => {
            p[c] = i + 1
            return p
        }, {})

    return arr.map(n => ranking[n])
}

console.log(arrayRankTransform([40,10,20,30]))
console.log(arrayRankTransform([100,100,100]))
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))
