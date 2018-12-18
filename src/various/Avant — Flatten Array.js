/**
 * Write a function that takes an array and returns a flattened
 * version of the input array.
 */

const flatten = function(arr, depth) {
  if (depth === 0) {
    return arr
  }

  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = [...acc, ...flatten(item, depth - 1)]
    } else {
      acc.push(item)
    }
    return acc
  }, [])
}

// Examples:
flatten([1, 2, [3, [4, 5, [6, [7]], 8], 9]]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten([[[[1]]]]) // [1]

/**
 * Follow-up question:
 * Given a second, optional, parameter depth
 *
 * function signature: flatten(arr, depth: number | undefined)
 */

console.log(flatten([[[[1]]]], 0)) // [[[[1]]]]
console.log(flatten([[[[1]]]], 1)) // [[[1]]]
console.log(flatten([[[[1]]]], 2)) // [[1]]
console.log(flatten([[[[1]]]], 3)) // [1]
console.log(flatten([1, 2, [3, [4, 5, [6, [7]], 8], 9]], 2)) // [1, 2, 3, 4, 5, [6, [7]], 8, 9]
