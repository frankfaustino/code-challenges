// Title  : Word Count Engine
// Source : https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5LM1
// Author : Frank Faustino
// Date   : 2018-12-09

const flip = (arr, k) => {
  const mid = Math.floor((k + 1) / 2)

  for (let i = 0; i < mid; i++) {
    const tmp = arr[i]
    arr[i] = arr[k - i]
    arr[k - i] = tmp
  }
}

const findMax = (arr, k) => {
  let max = 0

  for (let i = 0; i <= k; i++) {
    if (arr[i] > arr[max]) {
      max = i
    }
  }

  return max
}

const pancakeSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    max = findMax(arr, i)
    flip(arr, max)
    flip(arr, i)
  }

  return arr
}
