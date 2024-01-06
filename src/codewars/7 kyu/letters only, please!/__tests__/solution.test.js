const removeChars = require('../solution')

describe('Codewars — letters only, please!', () => {
    test('Tests', () => {
        expect(removeChars('.tree1')).toEqual('tree')
        expect(removeChars('that"s a pie&ce o_f p#ie!')).toEqual('thats a piece of pie')
        expect(removeChars('john.dope@dopington.com')).toEqual('johndopedopingtoncom')
        expect(removeChars('my_list = ["a","b","c"]')).toEqual('mylist  abc')
        expect(removeChars('1 + 1 = 2')).toEqual('    ')
        expect(removeChars('0123456789(.)+,|[]{}=@/~;^$"<>?-!*&:#%_')).toEqual('')
        expect(removeChars('test for error!')).toEqual('test for error')
        expect(removeChars('co_ol f0un%(c)t-io"n')).toEqual('cool function')
    })
})
