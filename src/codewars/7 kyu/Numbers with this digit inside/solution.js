// Source : https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039
// Author : Frank Faustino
// Date   : 2022-07-10

// Considerations:
//   - x is always greater than 0
//   - d is always between 0 and 9
//   - output is an array containing [count, sum, product]


function hasDigit(x, d) {
    for (let i = x; i > 0; i = Math.floor(i / 10)) {
        // Starting from x, divide by 10 and round down (i.e., 44, 4, 0)
        if ((i % 10) === d) {
            // d matches remainder of i divided by 10 (44 % 10 === 4)
            return true
        }
    }
    return false
}

function numbersWithDigitInside(x, d) {
    let count = 0
    let sum = 0
    let product = 1

    for (let i = 1; i <= x; i++) {
        // Starting from 1, iterate until x
        if (hasDigit(i, d)) {
            count++
            sum = sum + i
            product = product * i
        }
    }

    return count ? [count, sum, product] : [0, 0, 0]
}

// Alternative solution — converting num to string and using RegEx to find matching d
function numbersWithDigitInsideAlt(x, d) {
    // Array to keep track of matching numbers
    const matches = []

    // Loop through all numbers from 1 to x
    for (let i = 1; i <= x; i++) {
        // Convert current number to a string
        // Use RegEx to see if current number contains d
        if (i.toString().match(d)) matches.push(i)
    }

    const count = matches.length
    const sum = matches.reduce((p, c) => p + c, 0)
    // Product reduce statement always returns 1, so if count is 0, return 0 instead
    const product = count ? matches.reduce((p, c) => p * c, 1) : 0

    return [count, sum, product]
}

module.exports = numbersWithDigitInside
