// Source : https://www.codewars.com/kata/52b7ed099cdc285c300001cd
// Author : Frank Faustino
// Date   : 2024-01-31

// Time complexity  : O(n log n)
// Space complexity : O(n) worst case, if merge sort is used
function sumIntervals(intervals) {
    // sort the input array based on the start value
    intervals.sort((a, b) => a[0] - b[0])
    let current = intervals[0]
    let sum = 0

    for (let i = 1; i < intervals.length; i++) {
        // if current interval overlaps with the previous one
        if (intervals[i][0] <= current[1]) {
            // merge intervals by updating the end value
            current[1] = Math.max(current[1], intervals[i][1])
        } else {
            // add the length of the previous interval to the sum
            sum += current[1] - current[0]
            // update the current interval
            current = intervals[i]
        }
    }

    // add the length of the last interval to the sum
    return sum += current[1] - current[0]
}

module.exports = sumIntervals

// [(1, 4), (3, 5), (7, 10)] = 7
// (5 - 1) + (10 - 7) = 7

// [(-100000000, 10), (0, 20), (30, 40)] = 100000030
// (20 - -100000000) + (40 - 30) = 100000030

// [(1, 2), (6, 10), (11, 15)] = 9
// (2 - 1) + (10 - 6) + (15 - 11) = 9
