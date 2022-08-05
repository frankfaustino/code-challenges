/**
 * Time complexity: O(4n)
 * Space complexity: O(2n)
 * @param {number[]} arr
 * @return {number} count
 */
function minSetSize(arr) {
    // Create a sorted frequency array (i.e., [ 4, 3, 2, 1 ]).
    const frequency = Object.values(arr.reduce((dict, int) => {
        if (dict[int]) dict[int]++
        else dict[int] = 1
        return dict
    }, {})).sort((a, b) => b - a) // O(3 * n)
    let count = 1
    let sum = frequency[0]
    let i = 1
    // Sum the frequencies until we've found a combo that is
    // greater or equal to half of the given array.
    while (sum < arr.length / 2) {
        sum += frequency[i]
        count++
        i++
    }
    return count
}


console.log(minSetSize([3,3,3,3,5,5,5,2,2,7])) // 2, length=10/2=5, frequency=[4,3,2,1]
// console.log(minSetSize([7,7,7,7,7,7])) // 1, length=6/2=3, frequency=[6]
// console.log(minSetSize([1,2])) // 1, length=2/2=1, frequency=[1,1]
// console.log(minSetSize([1,2,3,4])) // 2, length=4/2=2, frequency=[1,1,1,1]
