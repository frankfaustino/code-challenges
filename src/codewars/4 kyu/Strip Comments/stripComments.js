// Source : https://www.codewars.com/kata/strip-comments/train/javascript
// Author : Frank Faustino
// Date   : 2019-01-06

function solution(input, markers) {
  markers.forEach(marker => {
    let index = input.indexOf(marker)
    if (index > -1) {
      if (input[index - 1] === ' ') {
        index--
      }
      const linebreak = input.indexOf('\n', index)
      input = linebreak > 0 ? (input.slice(0, index) + input.slice(linebreak)) : input.slice(0, index)
    }
  })
  return input
}

module.exports = solution