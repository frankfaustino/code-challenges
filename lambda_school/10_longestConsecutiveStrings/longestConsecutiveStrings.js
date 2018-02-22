/* ———
 * You are given an array of strings called arr and an integer k.
 * Your task is to return the longest string consisting of k consecutive strings.
 * Note: (n being the length of the array) if n = 0 or k > n or k <= 0 return ''.
 * ——— */

const longestConsecutive = (arr, k) => {
  // Code here
}

/* ——— Test cases ——— */
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // abigailtheta
// console.log(longestConsecutive(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) // oocccffuucccjjjkkkjyyyeehh
// console.log(longestConsecutive([], 3)) // ''
// console.log(longestConsecutive(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) // wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck
// console.log(longestConsecutive(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) // wlwsasphmxxowiaxujylentrklctozmymu
// console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) // ''
// console.log(longestConsecutive(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) // ixoyx3452zzzzzzzzzzzz
// console.log(longestConsecutive(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) // ''
// console.log(longestConsecutive(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) // ''
