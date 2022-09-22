/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function sumBase(n, k) {
    let sum = 0

    while (n > 0) {
        sum += n % k
        n = Math.floor(n / k)
    }

    return sum
}

console.log(sumBase(34, 6), 9) // 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9
console.log(sumBase(10, 10), 1) // 1 + 0 = 1
