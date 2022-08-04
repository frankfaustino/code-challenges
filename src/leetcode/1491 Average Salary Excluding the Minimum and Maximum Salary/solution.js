/**
 * To get the average salary (minus the min and max salaries)
 * we sort the array, slice the sub-array excluding min and max salaries,
 * reduce the salaries to a total, then get the average.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} salary
 * @return {number}
 */
function average(salary) {
    salary.sort((a, b) => a - b)
    return salary
        .slice(1, salary.length - 1)
        .reduce((p, c) => p + c, 0) / (salary.length - 2)
}

console.log(average([4000,3000,1000,2000])) // 2500
console.log(average([1000,2000,3000])) // 2000
console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000])) // 41700
