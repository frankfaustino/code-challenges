// Source : https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Author : Frank Faustino
// Date   : 2024-01-08

String.prototype.toJadenCase = function() {
    const str = this.valueOf()
    let output = ''

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || /\s/.test(str[i - 1])) {
            output += str[i].toUpperCase()
        } else {
            output += str[i]
        }
    }

    return output
}

module.exports = String

