// Source : https://www.codewars.com/kata/sum-the-tree/train/javascript
// Author : Frank Faustino
// Date   : 2019-01-07

const sumTheTreeValues = root =>
  root
    ? root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
    : 0

module.exports = sumTheTreeValues