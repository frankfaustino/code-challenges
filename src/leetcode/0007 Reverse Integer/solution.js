/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let negative = false
    if (x < 0) {
        negative = true
        x = -x
    }
    // get the number of digits
    let numOfDigits = Math.floor(Math.log10(x))
    let reversed = 0
    while (x > 0) {
        let digit = x % 10
        x = Math.floor(x / 10)
        reversed += Math.pow(10, numOfDigits) * digit
        numOfDigits -= 1
    }
    
    // this solution, although it was accepted, ultimately doesn't meet the
    // requirement of storing a number within a signed 32-bit int range
    if (reversed > Math.pow(2, 31) || reversed < -Math.pow(2, 31)) return 0
    return negative ? -reversed : reversed
}

// console.log(reverse(123)) // 321
// console.log(reverse(-123)) // -321
// console.log(reverse(120)) // 21
// console.log(reverse(9000)) // 9
// console.log(reverse(1534236469)) // 9646324351
