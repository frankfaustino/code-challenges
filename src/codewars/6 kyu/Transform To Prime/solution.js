// Source : https://www.codewars.com/kata/5a946d9fba1bb5135100007c
// Author : Frank Faustino
// Date   : 2024-02-07

// Time complexity  : unsure... depends on prime number distribution
// Space complexity : O(1)
function minimumNumber(numbers) {
    let num = numbers.reduce((sum, val) => sum + val, 0)
    let minNum = 0

    while (!isPrime(num)) {
        num++
        minNum++
    }

    return minNum
}

function isPrime(n) {
    if (n <= 1) return false

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }

    return true
}

module.exports = minimumNumber

