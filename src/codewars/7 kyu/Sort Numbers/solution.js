// Source : https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
// Author : Frank Faustino
// Date   : 2022-01-18

// quicksort
function solution(nums) {
    if (!nums || !nums.length) return []

    const index = Math.floor(Math.random() * nums.length)
    const pivot = nums[index]
    const left = []
    const right = []

    nums.forEach((n, i) => {
        if (i === index) return
        if (n < pivot) left.push(n)
        else right.push(n)
    })

    return [...solution(left), pivot, ...solution(right)]
}

module.exports = solution
