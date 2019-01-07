// Source : https://www.codewars.com/kata/permutations/javascript
// Author : Frank Faustino
// Date   : 2019-01-07

// Time and space complexity: O(n!)
function permutations(string) {
  const results = new Set()

  if (string.length === 1) {
    return [string]
  }

  for (let i = 0; i < string.length; i++) {
    const substr = permutations(string.substring(0, i) + string.substring(i + 1))
    for (let j = 0; j < substr.length; j++) {
      results.add(string[i] + substr[j])
    }
  }
  return [...results]
}

module.exports = permutations