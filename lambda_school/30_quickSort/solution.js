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

// b) Recursive solution
const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

const partition = (array, p, r) => {
  let q = p
  for (let i = p; i < r; i++) {
    if (array[i] <= array[r]) {
      swap(array, i, q)
      q++
    }
  }
  swap(array, r, q)
  return q
}

const quickSort = (array, p = 0, r = array.length - 1) => {
  if (p < r) {
    const q = partition(array, p, r)
    quickSort(array, p, q - 1)
    quickSort(array, q + 1, r)
  }

  return array
}