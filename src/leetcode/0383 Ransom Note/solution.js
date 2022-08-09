/**
 * Time complexity: 3⋅O(m) or O(m)
 * Space complexity: O(k) or O(1) [k is at most 26]
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    // Approach:
    // - count the frequency of each character in ransomNote
    // - count the frequency of each character in magazine
    // - store the counts in two hash maps
    // - compare the two hash maps
    const ransomNoteCount = makeFrequencyMap(ransomNote)
    const magazineCount = makeFrequencyMap(magazine)
        
    for (const [key] of Object.keys(ransomNoteCount)) {
        if (magazineCount.hasOwnProperty(key)) {
            if (magazineCount[key] < ransomNoteCount[key]) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}

const makeFrequencyMap = string =>
    string
        .split('')
        .reduce((acc, cur) => {
            if (acc[cur] === undefined) acc[cur] = 1
            else acc[cur]++
            return acc
        }, {})

console.log(canConstruct("a", "b")) // false
console.log(canConstruct("aa", "ab")) // false
console.log(canConstruct("aa", "aab")) // true
