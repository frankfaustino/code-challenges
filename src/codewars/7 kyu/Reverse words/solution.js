// Source : https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Author : Frank Faustino
// Date   : 2024-01-18

function reverseWords(str) {
    let output = ''
    const words = str.split(' ')

    words.forEach(word => {
        for (let i = word.length - 1; i >= 0; i--) {
            output += word[i]
        }
        output += ' '
    })

    return output.trimEnd()
}

module.exports = reverseWords

