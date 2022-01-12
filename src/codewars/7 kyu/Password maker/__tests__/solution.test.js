const solution = require('../solution')

describe('Codewars — Password maker', () => {
    test('Simple tests', () => {
        expect(solution('Give me liberty or give me death')).toEqual('Gml0gmd')
        expect(solution('Keep Calm and Carry On')).toEqual('KCaC0')
    })
})
