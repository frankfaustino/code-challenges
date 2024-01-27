const solution = require('../solution')

describe('Codewars — Simple Pig Latin', () => {
    test('Test', () => {
        expect(solution('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')
        expect(solution('This is my string')).toEqual('hisTay siay ymay tringsay')
        expect(solution('Hello world !')).toEqual('elloHay orldway !')
        expect(solution('O tempora o mores !')).toEqual('Oay emporatay oay oresmay !')
    })
})

