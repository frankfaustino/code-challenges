class TimeMap {
    constructor() {
        this.map = {}
    }

    /** 
     * @param {string} key 
     * @param {string} value 
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!(key in this.map)) this.map[key] = {}

        this.map[key][timestamp] = value
    }

    /** 
     * @param {string} key 
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!(key in this.map)) {
            return ''
        }
        for (let currTime = timestamp; currTime >= 1; --currTime) {
            if (currTime in this.map[key]) {
                return this.map[key][currTime]
            }
        }

        return ''
    }
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
const timeMap = new TimeMap()
timeMap.set('foo', 'bar', 1)  // store the key 'foo' and value 'bar' along with timestamp = 1.
timeMap.get('foo', 1)         // return 'bar'
timeMap.get('foo', 3)         // return 'bar', since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is 'bar'.
timeMap.set('foo', 'bar2', 4) // store the key 'foo' and value 'bar2' along with timestamp = 4.
timeMap.get('foo', 4)         // return 'bar2'
timeMap.get('foo', 5)         // return 'bar2'
