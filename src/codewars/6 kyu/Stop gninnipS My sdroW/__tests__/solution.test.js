const solution = require('../solution')

describe('Codewars — Stop gninnipS My sdroW!', () => {
    test('Tests', () => {
        expect(solution('Welcome')).toEqual('emocleW')
        expect(solution('Hey fellow warriors')).toEqual('Hey wollef sroirraw')
        expect(solution('This is a test')).toEqual('This is a test')
        expect(solution('This is another test')).toEqual('This is rehtona test')
        expect(solution('You are almost to the last test')).toEqual('You are tsomla to the last test')
        expect(solution('Just kidding there is still one more')).toEqual('Just gniddik ereht is llits one more')
        expect(solution('Seriously this is the last one')).toEqual('ylsuoireS this is the last one')
    })
})

