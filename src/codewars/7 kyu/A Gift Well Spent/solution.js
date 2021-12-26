// Source : https://www.codewars.com/kata/54554846126a002d5b000854/train/javascript
// Author : Frank Faustino
// Date   : 2021-12-26
// Lang   : JavaScript

function buy(x, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let f = i + 1; f < arr.length; f++) {
            // find two items in the array that add up to x
            // return first instance of the pair
            if (arr[i] + arr[f] === x) return [i, f]
        }
    }
    return null
}

module.exports = buy
