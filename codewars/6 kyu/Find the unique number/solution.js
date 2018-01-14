// Source : https://www.codewars.com/kata/find-the-unique-number-1
// Author : Frank Faustino
// Date   : 2017-09-23

const findUniq = arr => {
  const seen = {}
  arr.forEach((v,i) => {
    if (!seen[v]) seen[v] = 0
    seen[v]++
  })
  return +Object.keys(seen).find(key => seen[key] === 1)
}

// filter() returns the unique item found by indexOf and lastIndexOf
// The + and [0] changes the Array into a Number
const findUniq = arr => +arr.filter(value => arr.indexOf(value) == arr.lastIndexOf(value))
const findUniq = arr => arr.filter(value => arr.indexOf(value) == arr.lastIndexOf(value))[0]

// indexOf and lastIndexOf will === once the SINGLE, unique item has been found
// const findUniq = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr.indexOf(arr[i]), arr.lastIndexOf(arr[i]))
//   }
// }

// Sort the array [0,1,0] => [0,0,1],
// then check if index 0 & 1 match, if not,
// then we can assume the smaller number of the two is on the lefthand side,
// then we pop() the unique number off and return it
const findUniq = arr => {
  arr.sort((a, b) => a - b)
  return arr[0] == arr[1] ? arr.pop() : arr[0]
};

// slice() first 3 elements of array
function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3)
  if (a != b && a != c) return a
  for (let d of arr) if (d != a) return d
}

console.log(findUniq([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1]))
console.log(findUniq([0, 1, 0]))
console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([3, 10, 3, 3, 3]))
