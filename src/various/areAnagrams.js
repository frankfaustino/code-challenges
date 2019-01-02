/**
 * Given two strings, determine if they are anagrams of each other.
 * (A word is an anagram of another if you can rearrange its characters to produce the second word)
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar' are not anagrams
 */

// Time complexity: O(n)
// Space complexity: O(n)
const areAnagrams = (s1, s2) => {
  const characters = new Map()

  // Create a map of characters and their count from s1
  for (let char of s1) {
    characters.set(char, (characters.get(char) || 0) + 1)
  }

  // If a character from s2 isn't in the map, we don't have an anagram
  // Otherwise, decrement the count in the map
  for (let char of s2) {
    if (!characters.has(char)) {
      return false
    }
    characters.set(char, characters.get(char) - 1)
  }

  // If the count for all chracters have been decremented to 0
  // then we have an anagram
  return [...characters.values()].every(val => val === 0)
}

console.log(areAnagrams('earth', 'heart'))
console.log(areAnagrams('silent', 'listen'))
console.log(areAnagrams('foo', 'bar'))