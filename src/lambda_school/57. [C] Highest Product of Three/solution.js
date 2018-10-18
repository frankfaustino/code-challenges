// Title  : Highest Product of Three
// Author : Frank Faustino
// Date   : 2018-10-17
// Lang   : JavaScript

// Time Complexity: O(n)
// Space Complexity: O(1)
function highestProductOf3(arr) {
  if (arr.length < 3) {
    throw new Error('There\'s less than 3 items!')
  }
  let h3 = arr[0] * arr[1] * arr[2]
  let h2 = arr[0] * arr[1]
  let l2 = arr[0] * arr[1]
  let h  = Math.max(arr[0], arr[1])
  let l  = Math.min(arr[0], arr[1])

  for (let i = 2; i < arr.length; i++) {
    const tmp1 = h2 * arr[i]
    const tmp2 = l2 * arr[i]
    const tmp3 = h * arr[i]
    const tmp4 = l * arr[i]
    h3 = Math.max(h3, tmp1, tmp2)
    h2 = Math.max(h2, tmp3, tmp4)
    l2 = Math.min(l2, tmp3, tmp4)
    h  = Math.max(h, arr[i])
    l  = Math.min(l, arr[i])
  }

  return h3
}

module.exports = highestProductOf3
