// Source : https://www.codewars.com/kata/59c633e7dcc4053512000073
// Author : Frank Faustino
// Date   : 2024-02-15

// Time complexity  : O(n)
// Space complexity : O(m) m = # of consonant substrings
function solve(s) {
    // split s into an array of consonant substrings
    const consonants = s.split(/[aeiou]/)
    // map transform array into values
    const values = consonants.map(str => {
        let sum = 0
        for (const i in str) {
            sum += (str.charCodeAt(i) - 96)
        }
        return sum
    })
    // return the highest value
    return values.sort((a, b) => b - a)[0]
}

module.exports = solve

