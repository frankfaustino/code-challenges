// Source : https://www.codewars.com/kata/5a905c2157c562994900009d
// Author : Frank Faustino
// Date   : 2024-02-03

// Time complexity  : O(n)
// Space complexity : O(n)
function productArray(numbers) {
    const product = numbers.reduce((a, b) => b * a)
    return numbers.map(n => product / n)
}

module.exports = productArray

