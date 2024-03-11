// Source : https://leetcode.com/problems/custom-sort-string
// Author : Frank Faustino
// Date   : 2024-03-10
// Tags   : counting-sort, hash-table

// Time complexity  : O(n + m) m = s.length
// Space complexity : O(m)
function customSortString(order, s) {
    // count the frequency of each char in s
    const freq = {}
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1
    }

    // output chars in 's' in the order given by 'order'
    const output = []
    for (const char of order) {
        while (freq[char] > 0) {
            output.push(char)
            freq[char]--
        }
    }

    // output chars in 's' that are not in 'order'
    Object.entries(freq).forEach(([char, count]) => {
        while (count > 0) {
            output.push(char)
            count--
        }
    })

    return output.join('')
}

module.exports = customSortString

console.log(customSortString('cba', 'abcd')) // 'cbad'
console.log(customSortString('bcafg', 'abcd')) // 'bcad'
console.log(customSortString('xyzabc', 'oxaybzco')) // 'oxyzabco'
console.log(customSortString('kqep', 'pekeq')) // 'kqeep'

