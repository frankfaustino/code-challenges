// Source : https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/javascript
// Author : Frank Faustino
// Date   : 2022-01-29

function wrap(height, width, length) {
    const [h, w, l] = [height, width, length].sort((a, b) => a - b)
    return 2 * (w + l) + (h * 4) + 20
}

module.exports = wrap
