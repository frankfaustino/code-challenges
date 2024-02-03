// Source : https://www.codewars.com/kata/5a91a7c5fd8c061367000002
// Author : Frank Faustino
// Date   : 2024-02-03

// Time complexity  : O(n log n)
// Space complexity : O(1)
function minimumSteps(numbers, value) {
    numbers.sort((a, b) => a - b)
    return numbers.reduce(([sum, steps], n) => {
        sum += n
        if (sum < value) steps++
        return [sum, steps]
    }, [0, 0])[1]
}

module.exports = minimumSteps

