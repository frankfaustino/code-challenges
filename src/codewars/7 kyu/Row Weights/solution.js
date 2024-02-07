// Source : https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
// Author : Frank Faustino
// Date   : 2024-02-07

// Time complexity  : O(n)
// Space complexity : O(n)
function rowWeights(array) {
    return array.reduce(([left, right], val, i) => {
        if (i % 2 === 0) {
            left += val
        } else {
            right += val
        }
        return [left, right]
    }, [0, 0])
}

module.exports = rowWeights

