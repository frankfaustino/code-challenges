// Source : https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/javascript
// Author : Frank Faustino
// Date   : 2022-01-29

function wrap(height, width, length) {
    // we sort to determine the side with the largest area (i.e., w * l)
    const [h, w, l] = [height, width, length].sort((a, b) => a - b)
    // multiply the sum of the largest area by 2
    // multiply the height of the 4 sides
    // add the length of the bind (20)
    return 2 * (w + l) + (h * 4) + 20
}

module.exports = wrap
