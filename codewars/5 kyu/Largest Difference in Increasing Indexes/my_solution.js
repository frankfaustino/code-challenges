// Source : https://www.codewars.com/kata/largest-difference-in-increasing-indexes/javascript
// Author : Frank Faustino
// Date   : 2017-12-30
// Perf   : https://jsperf.com/lajsfailsf777777

// Time complexity: O(n^2)

const largestDifference = arr => {
  let output = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j])
        if (j - i > output) output = j - i
    }
  }
  return output
}

console.log(largestDifference([3,2,1])) // == 0 // never finds i<j such that data[i] <= data[j]
console.log(largestDifference([9,4,1,2,3,0,-1,-2])) // == 2
console.log(largestDifference([9,4,1,2,3,4,0,-1,-2])) // == 4
