// Source : https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// Author : Frank Faustino
// Date   : 2024-02-14

// Time complexity  : O(n log n)
// Space complexity : O(n)
function descendingOrder(n) {
    const arr = []
    while (n > 0) {
        arr.push(n % 10)
        n = Math.floor(n / 10)
    }

    arr.sort()

    let output = 0
    let mul = 1
    arr.forEach(n => {
        output += n * mul
        mul *= 10
    })

    return output
}

module.exports = descendingOrder

