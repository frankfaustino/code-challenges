// Source : https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// Author : Frank Faustino
// Date   : 2024-01-24

// Time complexity  : O(n)
// Space complexity : O(m) m = distinct chars in word
function duplicateEncode(word) {
    word = word.toLowerCase()
    const dict = {}
    let output = ''

    for (const char of word) {
        dict[char] = dict[char] ? dict[char] += 1 : 1
    }

    for (const char of word) {
        output += dict[char] > 1 ? ')' : '('
    }

    return output
}

module.exports = duplicateEncode

