arr = [['a', 'c', 'f'], ['b', 'e', 'h'], ['d', 'g', 'i']]

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

  for (let i = 0; i <= row + len - 1; i++) {
    const start_col = Math.max(0, i - row),
      count = Math.min(i, len - start_col, row)

    for (let j = 0; j < count; j++) {
      answer.push(matrix[Math.min(row, i) - j - 1][start_col + j])
    }
  }

  return answer
}

console.log(diagonal(arr))
console.log(diagonal(arr2))
// [ 0, 7, 2, 11, 8, 8, 10, 8, 1, 5, 3, 12, 11, 5, 10, 0 ]
console.log(diagonal(arr3))
// [ 2, 0, 10, 10, 10, 4, 0, 12, 8, 5, 4, 12, 4, 2, 9, 5, 6, 9, 2, 13, 3, 12, 3, 7, 1 ]
