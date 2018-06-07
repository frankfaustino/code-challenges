/* ———
 * Write a function that gets the product of all the integers in the array
 * EXCEPT the one at that index.
 * For example, given [1, 9, 6, 5, 2] your function should return
 * [540, 60, 90, 108, 270], because the calculation looks like this:
 * [9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5]
 *
 * Edge cases: No division, as some arrays may include 0.
 * Target time: O(n)
 * ——— */

const getProduct = arr => {
  // Code here
}

getProduct([1, 9, 6, 5, 2]) // [540, 60, 90, 108, 270]
getProduct([1, 2, 3, 4, 5]) // [120, 60, 40, 30, 24]
getProduct([1, 9, 6, 0, 2]) // [0, 0, 0, 108, 0]
