// Source : https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2
// Author : Frank Faustino
// Date   : 2024-03-04
// Tags   : time, math

// Time complexity  : O(n log n)
// Space complexity : O(n)
function solve(times) {
    // Remove duplicates
    const uniqueTimes = [...new Set(times)]

    // Convert times to minutes and sort
    const minutes = uniqueTimes
        .map(time => {
            const [hour, min] = time.split(':').map(Number)
            return hour * 60 + min
        })
        .sort((a, b) => a - b)

    // Calculate intervals, including from the last to the first the next day
    let maxInterval = 0
    // Calculate wrap-around interval correctly by subtracting one minute
    let wrapAroundInterval = (24 * 60) - minutes[minutes.length - 1] + minutes[0] - 1
    maxInterval = Math.max(maxInterval, wrapAroundInterval)

    for (let i = 0; i < minutes.length - 1; i++) {
        // Subtract one minute from each interval to account for the alarm ringing duration
        const interval = minutes[i + 1] - minutes[i] - 1
        maxInterval = Math.max(maxInterval, interval)
    }

    // Convert the maximum interval back to HH:MM format
    const hours = Math.floor(maxInterval / 60)
    const mins = maxInterval % 60
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
}

// Test cases
console.log(solve(['14:51'])) // '23:59'
console.log(solve(['23:00', '04:22', '18:05', '06:24'])) // '11:40'
console.log(solve(['21:14', '15:34', '14:51', '06:25', '15:30'])) // '09:10'

module.exports = solve

