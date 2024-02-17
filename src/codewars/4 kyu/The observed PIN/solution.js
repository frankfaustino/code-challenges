// Source : https://www.codewars.com/kata/5263c6999e0f40dee200059d
// Author : Frank Faustino
// Date   : 2024-02-16
// Tags   : combinatorial search, backtracking

// Time complexity  : O(kⁿ) k = avg num of possible digits for each position
// Space complexity : O(kⁿ)
function getPINs(observed) {
    // map each digit to its adjacent digits inclusive
    const adjacent = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9']
    }

    // generate all combinations of possible PINs
    function generatePINs(prefix, remainingDigits) {
        if (remainingDigits.length === 0) {
            // base case: no more digits to process, add current prefix to results
            return [prefix]
        } else {
            // recursive case: process each adjacent digit of the first remaining digit
            const firstDigitAdjacents = adjacent[remainingDigits[0]]
            let result = []

            firstDigitAdjacents.forEach(adjacentDigit => {
                // append each adjacent digit to the current prefix and recurse with the rest of the digits
                result = result.concat(generatePINs(prefix + adjacentDigit, remainingDigits.slice(1)))
            })

            return result
        }
    }

    // start generating PINs with an empty prefix and the observed PIN as the remaining digits
    return generatePINs('', observed)
}

module.exports = getPINs

