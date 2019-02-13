// Title  : Find Where to Expand in Minesweeper
// Author : Frank Faustino
// Date   : 2019-02-13
// Lang   : JavaScript

// Time complexity: O(n * m)
// Space complexity: O(n + m)
function click(field, num_rows, num_cols, given_i, given_j) {
  if (field[given_i][given_j] !== 0) {
    return field
  }
  const queue = [[given_i, given_j]]

  while (queue.length) {
    const [x, y] = queue.shift()
    field[x][y] = -2

    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        if (i >= 0 && i < num_rows && j >= 0 && j < num_cols) {
          if (field[i][j] === 0) {
            field[i][j] = -2
            queue.push([i, j])
          }
        }
      }
    }
  }

  return field
}

module.exports = click

