// Source : https://app.codesignal.com/interview-practice/task/HmNvEkfFShPhREMn4
// Author : Frank Faustino
// Date   : 2019-01-10

// Time complexity: O(n)
// Space complexity: O(2n)
const isListPalindrome = list => {
  let forward = ''
  let reverse = ''

  while (list) {
    forward = list.value + forward
    reverse = reverse + list.value
    list = list.next
  }
  return forward === reverse
}

// Time complexity: O(2n)
// Space complexity: O(n)
// const isListPalindrome = list => {
//   let arr = []

//   while (list) {
//     arr.push(list.value)
//     list = list.next
//   }

//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }

module.exports = isListPalindrome