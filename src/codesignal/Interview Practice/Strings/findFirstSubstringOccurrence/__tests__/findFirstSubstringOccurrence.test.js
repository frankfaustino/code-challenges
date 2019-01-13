const findFirstSubstringOccurrence = require('../findFirstSubstringOccurrence')

describe('Codesignal — findFirstSubstringOccurrence', () => {
  test('"CodefightsIsAwesome", "IA"', () => {
    expect(findFirstSubstringOccurrence('CodefightsIsAwesome', 'IA')).toEqual(-1)
  })
  test('"CodefightsIsAwesome", "IsA"', () => {
    expect(findFirstSubstringOccurrence('CodefightsIsAwesome', 'IsA')).toEqual(10)
  })
  test('"a", "a"', () => {
    expect(findFirstSubstringOccurrence('a', 'a')).toEqual(0)
  })
  test('"a", "A"', () => {
    expect(findFirstSubstringOccurrence('a', 'A')).toEqual(-1)
  })
  test('"sst", "st"', () => {
    expect(findFirstSubstringOccurrence('sst', 'st')).toEqual(1)
  })
  test('"lrnkbldxguzgcseccinlizyogwqzlifxcthdgmanjztlt", "an"', () => {
    expect(findFirstSubstringOccurrence('lrnkbldxguzgcseccinlizyogwqzlifxcthdgmanjztlt', 'an')).toEqual(38)
  })
  test('"ffbefbdbacbccecaceddcbcaeaebfedfcfdbeecffdbbf", "cb"', () => {
    expect(findFirstSubstringOccurrence('ffbefbdbacbccecaceddcbcaeaebfedfcfdbeecffdbbf', 'cb')).toEqual(9)
  })
})
