// Source : https://www.codewars.com/kata/61123a6f2446320021db987d
// Author : Frank Faustino
// Date   : 2022-01-07

function prevMultOfThree(n) {
    let str = n.toString()
    while (str.length > 0) {
        if (Number(str) % 3 === 0) {
            return Number(str)
        } else {
            str = str.slice(0, str.length - 1)
        }
    }
    return null
}

module.exports = prevMultOfThree
