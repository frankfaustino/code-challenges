const solution = require('../solution')

describe('Codewars — Extract the domain name from a URL', () => {
    test('Test', () => {
        expect(solution('http://google.com')).toEqual('google')
        expect(solution('http://google.co.jp')).toEqual('google')
        expect(solution('www.xakep.ru')).toEqual('xakep')
        expect(solution('https://youtube.com')).toEqual('youtube')
    })
})

