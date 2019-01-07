const sumStrings = require('../sumStrings')

describe('', () => {
  test('Simple additions', () => {
    expect(sumStrings('14','319')).toEqual('333')
    expect(sumStrings('123','456')).toEqual('579')
    expect(sumStrings('8797', '45')).toEqual('8842')
  })
  test('Corner cases', () => {
    expect(sumStrings('00103', '08567')).toEqual('8670')
    expect(sumStrings('2', '0')).toEqual('2')
    expect(sumStrings('0000001', '3')).toEqual('4')
    expect(sumStrings('0000000', '3')).toEqual('3')
    expect(sumStrings('9999', '111')).toEqual('10110')
  })
  test('Large numbers', () => {
    expect(sumStrings('712569312664357328695151392', '8100824045303269669937')).toEqual('712577413488402631964821329')
    expect(sumStrings('50095301248058391139327916261', '81055900096023504197206408605')).toEqual('131151201344081895336534324866')
  })
})