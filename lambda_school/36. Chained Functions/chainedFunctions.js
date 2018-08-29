/* ———
 * Your function should pass the given argument through each function in the array and return the result.
 * ——— */

const chainedFunctions = arr => {
  // Code here
}

// Example
function one(x) {
 return x + x
}

function two(x) {
 return x * 2
}

chainedFunctions([one, two])(3) // Should return 12