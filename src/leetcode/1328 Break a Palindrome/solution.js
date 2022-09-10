/**
 * @param {string} palindrome
 * @return {string}
 */
function breakPalindrome(palindrome) {
    const len = palindrome.length

    if (len === 1) {
        return ''
    }

    const arr = palindrome.split('')
    for (let i = 0; i <= Math.floor(len / 2) - 1; i++) {
        if (arr[i] !== 'a') {
            arr[i] = 'a'
            return arr.join('')
        }
    }

    arr[len - 1] = 'b'
    return arr.join('')
}

console.log(breakPalindrome('abccba')) // aaccba
console.log(breakPalindrome('a')) // ''
console.log(breakPalindrome('aa')) // ab
console.log(breakPalindrome('aba')) // abb
