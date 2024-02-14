// Source : https://www.codewars.com/kata/55908aad6620c066bc00002a
// Author : Frank Faustino
// Date   : 2024-02-14

// Time complexity  : O(n)
// Space complexity : O(1)
function XO(str) {
    return str
        .toLowerCase()
        .split('')
        .reduce((a, b) => {
            if (b === 'x') a++
            if (b === 'o') a--
            return a
        }, 0) === 0
}

module.exports = XO

