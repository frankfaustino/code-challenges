// Source : https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// Author : Frank Faustino
// Date   : 2024-02-08

// Time complexity  : O(n)
// Space complexity : O(1)
function isSquare (n) {
    let i = 0
    while (i <= n) {
        if (i * i === n) return true
        i++
    }
    return false
}

module.exports = isSquare

