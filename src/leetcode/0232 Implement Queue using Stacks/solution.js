class Stack {
    constructor() {
        this.stack = []
    }

    push(x) {
        this.stack.push(x)
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    empty() {
        return this.stack.length === 0
    }
}

class MyQueue {
    constructor() {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
        this.front
    }

    /** 
     * Pushes element x to the back of the queue.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.stackOne.empty()) {
            this.front = x
        }
        this.stackOne.push(x)
    }

    /**
     * Removes the element from the front of the queue and returns it.
     * @return {number}
     */
    pop() {
        if (this.stackTwo.empty()) {
            while (!this.stackOne.empty()) {
                this.stackTwo.push(this.stackOne.pop())
            }
        }

        return this.stackTwo.pop()
    }

    /**
     * Returns the element at the front of the queue.
     * @return {number}
     */
    peek() {
        if (!this.stackTwo.empty()) {
            return this.stackTwo.peek()
        }
        return this.front
    }

    /**
     * Returns true if the queue is empty, false otherwise.
     * @return {boolean}
     */
    empty() {
        return this.stackOne.empty() && this.stackTwo.empty()
    }
}


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const myQueue = new MyQueue()

// Test 1
myQueue.push(1) // queue is: [1]
myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek(), '1') // return 1
console.log(myQueue.pop(), '1') // return 1, queue is [2]
console.log(myQueue.empty(), 'false') // return false

// Test 2
// myQueue.push(1)
// myQueue.push(2)
// console.log(myQueue.pop(), '1')
// myQueue.push(3)
// myQueue.push(4)
// console.log(myQueue.pop(), '2')
// console.log(myQueue.peek(), '3')
