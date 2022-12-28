// Source : https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript
// Author : Frank Faustino
// Date   : 2021-12-27
// Lang   : JavaScript

function makeValley(arr) {
    const output = []
    const sortedArr = arr.sort((a, b) => b - a)

    for (let i = sortedArr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            output.push(sortedArr[i])
        } else {
            output.unshift(sortedArr[i])
        }
    }
    return output
}

module.exports = makeValley
