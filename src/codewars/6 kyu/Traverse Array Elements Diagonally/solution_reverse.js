// Source : https://www.codewars.com/kata/traverse-array-elements-diagonally/
// Ref    : https://www.geeksforgeeks.org/zigzag-or-diagonal-traversal-of-matrix/
// Author : Frank Faustino
// Date   : 2017-12-25

arr = [['i', 'g', 'd'], ['h', 'e', 'b'], ['f', 'c', 'a']]

arr2 = [[0, 2, 8, 5], [7, 8, 1, 11], [11, 8, 12, 10], [10, 3, 5, 0]]

arr3 = [
  [2, 10, 4, 5, 9],
  [0, 10, 8, 2, 2],
  [10, 12, 4, 9, 12],
  [0, 12, 6, 3, 7],
  [4, 5, 13, 3, 1]
]

const diagonal = matrix => {
  const answer = [],
    len = matrix.length,
    row = matrix[0].length

  for (let i = row + len - 1; i >= 0; i--) {
    const start_col = Math.max(0, i - row),
      count = Math.min(i, len - start_col, row)

    for (let j = count - 1; j >= 0; j--) {
      answer.push(matrix[Math.min(row, i) - j - 1][start_col + j])
    }
  }

  return answer
}

console.log(diagonal(arr))
console.log(diagonal(arr2))
// [0, 10, 5, 11, 12, 3, 5, 1, 8, 10, 8, 8, 11, 2, 7, 0]
console.log(diagonal(arr3))
// [1, 7, 3, 12, 3, 13, 2, 9, 6, 5, 9, 2, 4, 12, 4, 5, 8, 12, 0, 4, 10, 10, 10, 0, 2]
