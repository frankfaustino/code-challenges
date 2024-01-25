// Source : https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
// Author : Frank Faustino
// Date   : 2024-01-25

// Time complexity  : O(n)
// Space complexity : O(n)
function solution(list) {
    function appendToStr(arr, str) {
        // don't append ',' if front of str
        if (str) {
            str += ','
        }
        // if sequence is 3 or more numbers,
        // append first and last numbers to string
        // deliminated with a dash
        // otherwise, join the 2 numbers with a ','
        str += (arr.length >= 3)
            ? arr[0] + '-' + arr[arr.length - 1]
            : arr.join(',')
        return str
    }

    let arr = []
    let str = ''

    list.forEach(n => {
        if (arr.length === 0 || arr[arr.length - 1] === n - 1) { 
            arr.push(n)
        } else {
            str = appendToStr(arr, str)
            arr = [n]
        }
    })

    str = appendToStr(arr, str)

    return str
}

module.exports = solution

