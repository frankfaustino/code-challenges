// Title  : Minesweeper
// Author : Frank Faustino
// Date   : 2019-02-12
// Lang   : JavaScript

function minesweeper(bombs, num_rows, num_cols) {
  const minefield = [...Array(num_rows)].map(_ => Array(num_cols).fill(0))

  bombs.forEach(([i, j]) => {
    minefield[i][j] = -1

    for (let x = i - 1; x < i + 2; x++) {
      for (let y = j - 1; y < j + 2; y++) {
        if (x > -1 && x < num_rows && y > -1 && y < num_cols) {
          if (minefield[x][y] > -1) {
            minefield[x][y]++
          }
        }
      }
    }
  })

  return minefield
}

module.exports = minesweeper
