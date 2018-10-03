/*
Input:
  1, 1, 5, 9, 9
  2, 2, 6, 0, 0
  3, 3, 7, 1, 1
  4, 4, 8, 2, 2
  5, 5, 9, 3, 3

Output:
  9, 0, 1, 2, 3
  9, 0, 1, 2, 3
  5, 6, 7, 8, 9
  1, 2, 3, 4, 5
  1, 2, 3, 4, 5

Each element's starting index and
ending index (after rotation):
  0,0 ➜ 4,0
  0,1 ➜ 3,0
  0,2 ➜ 2,0
  0,3 ➜ 1,0
  0,4 ➜ 0,0

  1,0 ➜ 4,1
  1,1 ➜ 3,1
  1,2 ➜ 2,1
  1,3 ➜ 1,1
  1,4 ➜ 0,1
*/

const rotateImage = (arr) => {
  const output = []
  arr.forEach(() => output.push([]))

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      output[arr.length - 1 - j][i] = arr[i][j]
    }
  }

  return output
}

const arr = [
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
]

rotateImage(arr)