const multiply = require('../multiply')

describe('Some simple multiplications', () => {
  it('simple', () => {
    expect(multiply('2', '3')).toEqual('6')
    expect(multiply('30', '69')).toEqual('2070')
    expect(multiply('11', '85')).toEqual('935')
  })
})

describe('Some corner case', () => {
  it('corner cases', () => {
    expect(multiply('2', '0')).toEqual('0')
    expect(multiply('0', '30')).toEqual('0')
    expect(multiply('0000001', '3')).toEqual('3')
    expect(multiply('1009', '03')).toEqual('3027')
  })
})

describe('Some big multiplications', () => {
  it('big boys', () => {
    expect(multiply('98765', '56894')).toEqual('5619135910')
    expect(
      multiply('1020303004875647366210', '2774537626200857473632627613')
    ).toEqual('2830869077153280552556547081187254342445169156730')
    expect(
      multiply('58608473622772837728372827', '7586374672263726736374')
    ).toEqual('444625839871840560024489175424316205566214109298')
    expect(multiply('9007199254740991', '9007199254740991')).toEqual(
      '81129638414606663681390495662081'
    )
  })
})
