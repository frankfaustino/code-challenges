const UriBuilder = require('../uriBuilder')

const root = 'http://www.codewars.com'
const builder = new UriBuilder(root)

describe('Codewars — UriBuilder', () => {
  it('should have build method', () => {
    const spy = spyOn(builder, 'build')
    builder.build()
    expect(spy).toBeCalled()
  })
  it('should build a valid URI', () => {
    expect(builder.build()).toEqual(root)
  })
  it('params.a = 2', () => {
    builder.params.a = '2'
    expect(builder.build()).toEqual(`${root}?a=2`)
  })
  it('params.b = 1', () => {
    builder.params.b = '1'
    expect(builder.build()).toEqual(`${root}?a=2&b=1`)
  })
  it('delete builder.params.a', () => {
    delete builder.params.a
    expect(builder.build()).toEqual(`${root}?b=1`)
  })
  it('params.b = "a b"', () => {
    builder.params.b = 'a b'
    expect(builder.build()).toEqual(`${root}?b=a%20b`)
  })
})
