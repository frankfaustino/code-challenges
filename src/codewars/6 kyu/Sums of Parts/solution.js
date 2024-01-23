// Source : https://www.codewars.com/kata/5ce399e0047a45001c853c2b
// Author : Frank Faustino
// Date   : 2024-01-23

// Time complexity  : O(n)
// Space complexity : O(n)
function partsSums(ls) {
    let total = ls.reduce((p, c) => p + c, 0)
    const output = [total]

    for (let i = 0; i < ls.length; i++) {
        total -= ls[i]
        output.push(total)
    }

    return output
}

module.exports = partsSums

