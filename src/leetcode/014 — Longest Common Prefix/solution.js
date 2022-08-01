// Source : https://leetcode.com/problems/longest-common-prefix
// Author : Frank Faustino
// Date   : 2022-08-01

// Time complexity: O(n)

const longestCommonPrefix = function (strs) {
    return strs.reduce((acc, cur) => {
        while (cur.slice(0, acc.length) !== acc) {
            acc = acc.slice(0, acc.length - 1)
        }
        return acc
    })
}

console.log(longestCommonPrefix(["ab", "a"]))
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
