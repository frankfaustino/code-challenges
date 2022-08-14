/**
 * Time complexity: O(1) upper bound for s is 3999 (MMMCMXCIX)
 * Space complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanNums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // start w/ the last numeral in s
    let sum = romanNums[s[s.length - 1]]

    for (let i = s.length - 2; i >= 0; i--) {
        if (romanNums[s[i]] >= romanNums[s[i + 1]]) {
            // is the current value greater than the previous one we saw?
            // if yes, we add it to the running total
            sum += romanNums[s[i]]
        } else {
            // otherwise, subtract
            sum -= romanNums[s[i]]
        }
    }
    return sum
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
console.log(romanToInt('MMMCMXCIX')) // 3999

