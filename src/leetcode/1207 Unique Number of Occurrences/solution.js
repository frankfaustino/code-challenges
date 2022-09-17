/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    /* const count = {}

    arr.forEach(n => {
        if (n in count) count[n]++
        else count[n] = 1
    })

    const counted = Object.values(count).sort()

    for (let index = 0; index < counted.length; index++) {
        if (counted[index] === counted[index - 1]) return false
    }

    return true */
    const freqMap = arr.reduce((freq, c) => {
        if (c in freq) freq[c]++
        else freq[c] = 1
        return freq
    }, {})

    return (new Set(Object.values(freqMap))).size === Object.keys(freqMap).length
}

console.log(uniqueOccurrences([1,2,2,1,1,3]), 'true')
console.log(uniqueOccurrences([1,2]), 'false')
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]), 'true')
