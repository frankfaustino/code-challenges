// Title  : Insertion Sort
// Author : Frank Faustino
// Date   : 2018-04-21
// Lang   : JavaScript

//
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > tmp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = tmp
  }
  return arr
}

//
const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

//
const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = tmp
  }
  return arr
}
