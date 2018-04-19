// Title  : Balanced Brackets
// Author : Frank Faustino
// Date   : 2018-04-19
// Lang   : JavaScript

const balancedBrackets = str => {
  let output = true
  const open = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const close = {
    '}': true,
    ']': true,
    ')': true
  }
  const seen = []

  for (let bracket of str) {
    if (open[bracket]) seen.push(bracket)
    else if (close[bracket] && open[seen.pop()] !== bracket) output = false
  }

  return output && str.length > 1
}
