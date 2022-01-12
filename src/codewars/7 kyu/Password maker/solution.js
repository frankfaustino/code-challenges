// Source : https://www.codewars.com/kata/5637b03c6be7e01d99000046
// Author : Frank Faustino
// Date   : 2022-01-11

function makePassword(phrase) {
    const dict = { o: 0, i: 1, s: 5 }
    return phrase.split(' ').reduce((p, c) => {
        const number = dict[c.charAt(0).toLowerCase()]
        const firstChar = number !== undefined ? number : c.charAt(0)
        return p + firstChar
    }, '')
}

module.exports = makePassword
