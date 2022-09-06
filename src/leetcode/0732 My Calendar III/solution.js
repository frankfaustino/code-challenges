class MyCalendarThree {
    constructor() {
        this.treeMap = {}
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {number}
     */
    book(start, end) {
        if (!this.treeMap[start]) {
            this.treeMap[start] = 0
        }
        this.treeMap[start]++

        if (!this.treeMap[end]) {
            this.treeMap[end] = 0
        }
        this.treeMap[end]--

        let answer = 0
        let current = 0

        for (let key in this.treeMap) {
            current += this.treeMap[key]
            answer = Math.max(answer, current)
            // console.log(key, current, answer)
        }

        // console.log(this.treeMap, answer)
        return answer
    }
}

const testCase = [[],
    [10, 20], // 1
    [50, 60], // 1
    [10, 40], // 2 intersects with first event, max k-booking is 2-booking
    [5, 15],  // 3 remaining events cause max k-booking to only be a 3-booking
    [5, 10],  // 3
    [25, 55]] // 3

function runTestCase(testCase) {
    let calendar

    testCase.forEach(([start, end], i) => {
        if (i === 0) {
            calendar = new MyCalendarThree()
        } else {
            calendar.book(start, end)
            // console.log(calendar.book(start, end))
        }
    })
}
runTestCase(testCase) // [null, 1, 1, 2, 3, 3, 3]
