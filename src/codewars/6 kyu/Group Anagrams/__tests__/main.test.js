const solution = require('../main')

describe('Tests', () => {
    it('test', () => {
        expect(solution(['rat', 'tar', 'star'])).toEqual([['rat', 'tar'], ['star']])
        expect(solution(['tsar', 'rat', 'tar', 'star', 'tars', 'cheese']))
            .toEqual([['tsar', 'star', 'tars'], ['rat', 'tar'], ['cheese']])
    })
})

