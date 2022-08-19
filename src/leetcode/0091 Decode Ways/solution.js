/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    // let's keep track of previous results
    const memo = new Array(s.length)

    function recursion(i, str) {
        // we've reached the end of str
        if (i === str.length) return 1

        // check memo if we've seen the result
        if (memo[i] !== undefined) return memo[i]

        // leading 0's can't be decoded, terminate path
        if (str[i] === '0') return 0

        if (i === str.length - 1) return 1 

        let ans = recursion(i + 1, str)
        if (Number.parseInt(str[i] + str[i + 1]) <= 26) {
            ans += recursion(i + 2, str)
        }

        memo[i] = ans

        return ans
    }

    return recursion(0, s)
}

console.log(numDecodings('12')) // 2
console.log(numDecodings('226')) // 3
console.log(numDecodings('06')) // 0
console.log(numDecodings('11106')) // 2
console.log(numDecodings('2125')) // 5
console.log(numDecodings('1201234')) // 5

