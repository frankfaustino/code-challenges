// Source : https://app.codesignal.com/interview-practice/task/6rE3maCQwrZS3Mm2H
// Author : Frank Faustino
// Date   : 2019-01-10

// Time complexity: O(n)
// Space complexity: O(1)
function mergeTwoLinkedLists(l1, l2) {
  let output = null
  let prev = null

  while (l1 && l2) {
    if (l1.value < l2.value) {
      if (prev) {
        prev.next = l1
        prev = l1
      } else {
        output = l1
        prev = l1
      }
      l1 = l1.next
    } else {
      if (prev) {
        prev.next = l2
        prev = l2
      } else {
        output = l2
        prev = l2
      }
      l2 = l2.next
    }
  }
  if (l1 == null) {
    prev ? (prev.next = l2) : (output = l2)
  } else {
    prev ? (prev.next = l1) : (output = l1)
  }

  return output
}

// Time & space complexity: O(n)
// function mergeTwoLinkedLists(l1, l2) {
//   const output = []

//   while (l1 || l2) {
//     if (l1 && l2) {
//       if (l1.value == null) {
//         l1 = l1.next
//       } else if (l2.value == null) {
//         l2 = l2.next
//       } else if (l1.value < l2.value) {
//         output.push(l1.value)
//         l1 = l1.next
//       } else if (l2.value < l1.value) {
//         output.push(l2.value)
//         l2 = l2.next
//       }
//     } else if (l1) {
//       output.push(l1.value)
//       l1 = l1.next
//     } else if (l2) {
//       output.push(l2.value)
//       l2 = l2.next
//     }
//   }

//   return output
// }

module.exports = mergeTwoLinkedLists
