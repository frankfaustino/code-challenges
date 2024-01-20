// Source : https://www.codewars.com/kata/55f2b110f61eb01779000053
// Author : Frank Faustino
// Date   : 2024-01-20

// Brute force
// Time complexity  : O(b)
// Space complexity : O(1)
function getSum(a, b) {
    // if a is larger, swap the values
    if (b < a) {
        const c = a
        a = b
        b = c
    }
    let sum = a
    // sum the integers within the range a to b, inclusive
    while (a < b) {
        a++
        sum += a
    }
    return sum
}

// Arithmetic series / Gauss summation
// https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
// const getSum = (a, b) => (Math.abs(a - b) + 1) * (a + b) / 2

module.exports = getSum

