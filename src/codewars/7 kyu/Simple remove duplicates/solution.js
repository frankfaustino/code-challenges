// Source : https://www.codewars.com/kata/5ba38ba180824a86850000f7
// Author : Frank Faustino
// Date   : 2022-01-06

function solve(arr) {
    const seen = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!seen.includes(arr[i])) seen.unshift(arr[i])
    }
    return seen
}

module.exports = solve
