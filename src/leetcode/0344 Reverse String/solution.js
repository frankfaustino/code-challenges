/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// time complexity: O(n / 2)
// space complexity: O(1)
function reverseString(s) {
    // using two pointers (starting at index 0 and length - 1) 
    // swap characters in place (using ES6 destructuring assignment)
    // until we reach the middle index
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        [s[left], s[right]] = [s[right], s[left]]
    }
}

// time complexity: O(n / 2)
// space complexity: O(n / 2)
function reverseStringRecursive(s) {
    function reverse(left, right) {
        if (left < right) {
            [s[left], s[right]] = [s[right], s[left]]
            reverse(left + 1, right - 1)
        }
    }
    reverse(0, s.length - 1)
}

// time complexity: O(n)
// space complexity: O(n)
function reverseStringStack(s) {
    const stack = s.slice()
    let i = 0
    while (stack.length) {
        s[i] = stack.pop()
        i++
    }
}

const stringTwo = ["H","a","n","n","a","h"]
const stringOne = ["h", "e", "l", "l", "o"]
// reverseString(stringOne)
// reverseString(stringTwo)
// reverseStringRecursive(stringOne)
// reverseStringRecursive(stringTwo)
reverseStringStack(stringOne)
reverseStringStack(stringTwo)
console.log(stringOne)
console.log(stringTwo)
