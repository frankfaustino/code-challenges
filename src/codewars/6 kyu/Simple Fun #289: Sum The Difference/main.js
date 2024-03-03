// Source : https://www.codewars.com/kata/591d0fd7c09ee0021400005b
// Author : Frank Faustino
// Date   : 2024-03-03

// Time complexity  : O(n)
// Space complexity : O(n)
function sumtheDifference(input) {
    // remove all whitespace
    let equation = ''
    let i = 0
    while (i < input.length) {
        if (!/\s/.test(input[i])) {
            equation += input[i]
        }
        i++
    }

    // calculate sum of even digits
    // calculate sum of odd digits
    const evenNums = []
    const oddNums = []
    i = 0
    while (i < equation.length) {
        if (/\d/.test(equation[i]) && equation[i] !== '0') {
            let prefix = ''
            if (equation[i-1] === '-') {
                prefix = '-'
            }
            const currentNum = parseInt(prefix + equation[i])
            if (currentNum % 2 === 0) {
                evenNums.push(currentNum)
            } else {
                oddNums.push(currentNum)
            }
        }
        i++
    }
    const evenSum = evenNums.reduce((a, b) => a + b, 0)
    const oddSum = oddNums.reduce((a, b) => a + b, 0)

    // subtract sum of odd digits from sum of even digits
    return evenSum - oddSum
}

module.exports = sumtheDifference

