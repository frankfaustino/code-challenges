// Source : https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// Author : Frank Faustino
// Date   : 2024-01-05

function isIsogram(str) {
    const set = new Set(str.toLowerCase())
    return set.size === str.length
}

module.exports = isIsogram

