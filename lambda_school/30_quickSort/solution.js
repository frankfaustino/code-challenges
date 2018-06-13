// Title  : Quick Sort
// Author : Frank Faustino
// Date   : 2018-06-12
// Lang   : JavaScript

// a) Recursive solution using last element as the pivot
// and two arrays to store the left and right values.
const quickSort = (arr) => {
  if (arr.length < 2) return arr

  const pivot = arr.pop()
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
