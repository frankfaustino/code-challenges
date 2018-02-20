// Title  : Even Occurrence
// Author : Frank Faustino
// Date   : 2018-02-19
// Lang   : JavaScript
// Perf   : https://jsperf.com/evenoccurrence

// forEach, for...of
const evenOccurrence = arr => {
  const obj = {}

  arr.forEach((num) => {
    if (obj[num]) obj[num]++
    else obj[num] = 1
  })

  for (let num of arr) {
    if (obj[num] % 2 === 0) return num
  }

  return null
}

// for loop
const evenOccurrence = arr => {
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++
    else obj[arr[i]] = 1
  }

  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]] % 2 === 0) return arr[j]
  }

  return null
}