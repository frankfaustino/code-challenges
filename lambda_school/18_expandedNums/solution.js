// Title  : Expanded Nums
// Author : Frank Faustino
// Date   : 2018-03-10
// Lang   : JavaScript

// a) reduce
const expandedNums = n =>
  n
    .toString()
    .split('')
    .reduce(
      (a, c, i, arr) =>
        arr[i] === '0' ? a + c : a + '0'.repeat(arr.length - i) + ' + ' + c
    )

// b) for loop
const expandedNums = n => {
  const output = []
  const arr = n.toString().split('').reverse()
  let place = 1

  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 && output.unshift(arr[i] * place)
    place *= 10
  }

  return output.join(' + ')
}
