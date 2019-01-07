function swap(arr, a, b) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function nextBigger(n) {
  n = n.toString().split('')
  let i = n.length - 1

  // get index of first digit with smallest value to its left
  while (i > 0) {
    if (n[i] > n[i - 1]) break
    i--
  }
  if (i === 0) return -1

  let smallest = i - 1
  let nextSmallest = i
  let j = i + 1

  // find next smallest value and swap it with the smallest
  while (j < n.length) {
    if (n[j] < n[nextSmallest] && n[j] > n[smallest]) {
      nextSmallest = j
    }
    j++
  }

  swap(n, smallest, nextSmallest)
  // sort the digits after i-1 in ascending order
  n.push(...n.splice(i).sort())

  let output = 0

  n.forEach(number => (output = output * 10 + Number(number)))

  return output
}

module.exports = nextBigger