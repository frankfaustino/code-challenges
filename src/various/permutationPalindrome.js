// aabbcce — can be a palindrome (abcecba)
// aaaaabc — cannot be a palidrome (3 odd numbered characters)
// aaaabb  — can be a palindrome (aabbaa)

// Time complexity: O(n)
// Space complexity: O(n)
const isPermutationPalindrome = str => {
  const set = new Set()

  // Add each char to the set if it doesn't exist in the set
  // otherwise, delete it from the set.
  // This pairs the matching characters in the string.
  for (let char of str) {
    if (set.has(char)) {
      set.delete(char)
    } else {
      set.add(char)
    }
  }

  // If all or all but one characters matched,
  // then we have a permutation palindrome.
  return set.size <= 1
}

console.log(isPermutationPalindrome('aabbcce'))
console.log(isPermutationPalindrome('aaaaabc'))
console.log(isPermutationPalindrome('aaaabb'))