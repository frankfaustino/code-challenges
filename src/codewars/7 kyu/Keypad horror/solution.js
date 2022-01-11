// Source : https://www.codewars.com/kata/5572392fee5b0180480001ae
// Author : Frank Faustino
// Date   : 2022-01-10

const computerToPhone = n => {
    const dict = {
        7: '1',
        8: '2',
        9: '3',
        4: '4',
        5: '5',
        6: '6',
        1: '7',
        2: '8',
        3: '9',
        0: '0'
    }
    return [...n].reduce((p, c) => p + dict[c], '')
}

module.exports = computerToPhone
