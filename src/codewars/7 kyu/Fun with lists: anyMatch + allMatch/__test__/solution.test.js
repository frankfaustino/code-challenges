const solution = require('../solution')

function Node(data, next = null) {
    this.data = data
    this.next = next
}

function listFromArray(array) {
    let lastNode = null;
    for (let i = array.length - 1; i >= 0; i--) {
        lastNode = new Node(array[i], lastNode)
    }
    return lastNode
}

describe('Codewars — Fun with lists: anyMatch + allMatch', () => {
    test('Simple tests', () => {
        expect(solution.anyMatch(null, _ => false)).toEqual(false)
        expect(solution.anyMatch(null, _ => true)).toEqual(false)
        expect(solution.allMatch(null, _ => false)).toEqual(true)
        expect(solution.allMatch(null, _ => true)).toEqual(true)
        expect(solution.anyMatch(listFromArray([1, 2, 3]), x => x > 1)).toEqual(true)
        expect(solution.allMatch(listFromArray([1, 2, 3]), x => x > 1)).toEqual(false)
    })
})
