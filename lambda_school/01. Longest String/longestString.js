/* ———
 * Write a function that takes an array of strings as input
 * Return the longest string in the array
 * ——— */

const longestStr = arr => {
  // Code here
}

/* ——— Test cases ——— */
const a = ['abc', 'a', 'b']
const b = ['abc', 'def']
const c = []
const d = ['liger', 'axolotl', 'slow loris', 'narwhal']

console.log(longestStr(a)) // -> 'abc'
console.log(longestStr(b)) // -> 'def'
console.log(longestStr(c)) // -> null
console.log(longestStr(d)) // -> 'slow loris'