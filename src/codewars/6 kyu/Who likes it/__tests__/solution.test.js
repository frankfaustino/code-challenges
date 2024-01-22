const solution = require('../solution')

describe('Codewars — Who likes it?', () => {
    test('Tests', () => {
        expect(solution([])).toEqual('no one likes this')
        expect(solution(['Peter'])).toEqual('Peter likes this')
        expect(solution(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
        expect(solution(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this')
        expect(solution(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this')
        // create an array of random length up to 100 filled with strings of random chars
        const arr = new Array(Math.floor(Math.random() * 96) + 4)
            .fill(0).map(_ => (Math.random() + 1).toString(36).substring(7))
        expect(solution(arr)).toEqual(`${arr.slice(0, 2).join(', ')} and ${arr.length - 2} others like this`)
    })
})

