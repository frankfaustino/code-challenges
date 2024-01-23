// Source : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// Author : Frank Faustino
// Date   : 2024-01-22

// Time complexity  : O(n)
// Space complexity : O(n)
function solution(str) {
    const output = []

    for (let i = 0; i < str.length; i += 2) {
        // if we've reached the end of the array, i.e., undefined
        // replace with _
        const second = str[i+1] || '_'
        output.push(`${str[i]}${second}`)
    }

    return output
}

// use match w/ RegEx to find pairs 
// Time complexity  : O(n)
// Space complexity : O(n)
// const solution = s => (s + '_').match(/.{2}/g) || []

module.exports = solution

