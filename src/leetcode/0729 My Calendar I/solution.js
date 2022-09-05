class MyCalendar {
    constructor() {
        this.calendar = []
    }

    /** 
     * Time complexity: O(n^2)
     * Space complexity: O(n)
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        for (const [prevStart, prevEnd] of this.calendar) {
            if (prevStart < end && start < prevEnd) return false
        }
        this.calendar.push([start, end])
        return true
    }
}

const myCalendar = new MyCalendar()
console.log(myCalendar.book(10, 20)) // true
console.log(myCalendar.book(15, 25)) // false (prevStart < end && start < prevEnd)
console.log(myCalendar.book(20, 30)) // true
