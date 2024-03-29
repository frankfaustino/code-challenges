// Source : https://www.codewars.com/kata/537400e773076324ab000262
// Author : Frank Faustino
// Date   : 2024-03-02

// Time complexity  : O(n * k log k) where k is avg length of a word
// Space complexity : O(n)
function groupAnagrams(words) {
    const anagrams = {}

    words.forEach(word => {
        const sorted = word.split('').sort().join('')
        if (anagrams[sorted]) anagrams[sorted].push(word)
        else anagrams[sorted] = [word]
    })

    return Object.values(anagrams)
}

module.exports = groupAnagrams

