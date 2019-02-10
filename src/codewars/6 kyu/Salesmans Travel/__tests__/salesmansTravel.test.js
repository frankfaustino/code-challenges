const salesmansTravel = require('../salesmansTravel')
const solution = require('../solution')

const addresses =
  '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,' +
  '54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,' +
  '10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,' +
  '22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,' +
  '45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,' +
  '100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,' +
  '2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,' +
  '45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,' +
  '100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,' +
  '2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,' +
  '2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,' +
  '2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000'

describe('Codewars — Salesman\'s Travel', () => {
  test('OH 43071', () => {
    expect(solution(addresses, 'OH 43071')).toEqual(
      'OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432'
    )
  })
  test('NY 56432', () => {
    expect(solution(addresses, 'NY 56432')).toEqual(
      'NY 56432:High Street Pollocksville/786'
    )
  })
  test('ZP 32908', () => {
    expect(solution(addresses, 'ZP 32908')).toEqual(
      'ZP 32908:Holy Grail Street Niagara Town,Holy Grail Al. Niagara Town,Holy Grail Street Niagara Town/54,45,2'
    )
  })
  test('AE 56210', () => {
    expect(solution(addresses, 'AE 56210')).toEqual(
      'AE 56210:Main Rd. Bern,Main Al. Bern,Main Rd. Bern/3200,320,3'
    )
  })
  test('RE 13000', () => {
    expect(solution(addresses, 'RE 13000')).toEqual(
      'RE 13000:Gordon St. Atlanta,Gordon St. Atlanta,Gordon Road Atlanta,Gordon Park Atlanta,Gordon St. Atlanta,Gordon Road Atlanta,Gordon St. Atlanta/1,10,58,14,2,5,77'
    )
  })
  test('EX 34342', () => {
    expect(solution(addresses, 'EX 34342')).toEqual(
      'EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100'
    )
  })
  test('SW 43098', () => {
    expect(solution(addresses, 'SW 43098')).toEqual(
      'SW 43098:Tokyo Av. Tedmondville,Tokyo Av. Tedmondville/22,2200'
    )
  })
  test('AA 45521', () => {
    expect(solution(addresses, 'AA 45521')).toEqual(
      'AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67'
    )
  })
  test('GG 30654', () => {
    expect(solution(addresses, 'GG 30654')).toEqual(
      'GG 30654:Surta Alley Goodtown,Surta Avenue Goodtown/10,11'
    )
  })
  test('ZP 32908', () => {
    expect(solution(addresses, 'ZP 32908')).toEqual(
      'ZP 32908:Holy Grail Street Niagara Town,Holy Grail Al. Niagara Town,Holy Grail Street Niagara Town/54,45,2'
    )
  })
  test('AE 56215', () => {
    expect(solution(addresses, 'AE 56215')).toEqual(
      'AE 56215:Main Al. Bern/320'
    )
  })
  test('RE 13200', () => {
    expect(solution(addresses, 'RE 13200')).toEqual(
      'RE 13200:Gordon Park Atlanta/14'
    )
  })
  test('EX 34345', () => {
    expect(solution(addresses, 'EX 34345')).toEqual(
      'EX 34345:Pussy Cat Rd. Chicago/100'
    )
  })
  test('RE 13222', () => {
    expect(solution(addresses, 'RE 13222')).toEqual(
      'RE 13222:Gordon St. Atlanta/2'
    )
  })
  test('RE 13001', () => {
    expect(solution(addresses, 'RE 13001')).toEqual(
      'RE 13001:Gordon Road Atlanta/5'
    )
  })
  test('SW 43198', () => {
    expect(solution(addresses, 'SW 43198')).toEqual(
      'SW 43198:Tokyo Av. Tedmondville,Tokyo Av. Tedmondville/2200,2222'
    )
  })
  test('AA 45522', () => {
    expect(solution(addresses, 'AA 45522')).toEqual(
      'AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670'
    )
  })
  test('GG 30655', () => {
    expect(solution(addresses, 'GG 30655')).toEqual(
      'GG 30655:Surta Avenue Goodville,Surta Avenue Goodville/11,114'
    )
  })
  test('XX 32321', () => {
    expect(solution(addresses, 'XX 32321')).toEqual('XX 32321:/')
  })
  test('YY 45098', () => {
    expect(solution(addresses, 'YY 45098')).toEqual('YY 45098:/')
  })
})
