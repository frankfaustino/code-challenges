// Source : https://www.codewars.com/kata/5a651865fd56cb55760000e0
// Author : Frank Faustino
// Date   : 2024-02-01

// Time complexity  : O(n)
// Space complexity : O(n)
function arrayLeaders(numbers) {
    let leaders = []
    let rightSum = 0
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] > rightSum) {
            leaders.unshift(numbers[i])
        }
        rightSum += numbers[i]
    }

    return leaders
}

module.exports = arrayLeaders

// 1, 2, 3, 4, 0
// 9  7  4  0  0
//
// 16 17  4  3  5  2
// 31 14 10  7  2  0

