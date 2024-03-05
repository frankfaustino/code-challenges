const solve = require('../main.js')

describe('Basic tests', () => {
    it('Should solve for these tests', () => {
        expect(solve(['14:51'])).toEqual('23:59')
        expect(solve(['23:00','04:22','18:05','06:24'])).toEqual('11:40')
        expect(solve(['21:14', '15:34', '14:51', '06:25', '15:30'])).toEqual('09:10')
    })
})

