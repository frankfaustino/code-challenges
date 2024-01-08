// Source : https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// Author : Frank Faustino
// Date   : 2024-01-07

function duplicateCount(text) {
    const dict = {}
    text = text.toLowerCase()
    for (const c of text) {
        dict[c] = dict[c] ? dict[c] + 1 : 0 + 1 
    }
    return Object
        .values(dict)
        .reduce((count, v) => v > 1 ? count + 1 : count, 0)
}

module.exports = duplicateCount

