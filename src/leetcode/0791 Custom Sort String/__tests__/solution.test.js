const solution = require('../solution')

describe('791. Custom Sort String', () => {
    it('Basic tests', () => {
        expect(solution('cba', 'abcd')).toEqual('cbad')
        expect(solution('bcafg', 'abcd')).toEqual('bcad')
        expect(solution('xyzabc', 'oxaybzco')).toEqual('xyzabcoo')
    })
})

