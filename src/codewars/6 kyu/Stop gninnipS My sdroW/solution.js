// Source : https://www.codewars.com/kata/5264d2b162488dc400000001
// Author : Frank Faustino
// Date   : 2024-02-09

// Time complexity  : O(n)
// Space complexity : O(n)
const spinWords = string => string
    .split(' ')
    .map(word => {
        if (word.length > 4) word = reverseWord(word)
        return word
    })
    .join(' ')

function reverseWord(word) {
    let reversed = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]
    }
    return reversed
}

module.exports = spinWords

