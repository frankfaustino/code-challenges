const formatDuration = require('../formatDuration')

test('Codewars — Human readable duration format', () => {
  expect(formatDuration(0)).toEqual('now')
  expect(formatDuration(1)).toEqual('1 second')
  expect(formatDuration(62)).toEqual('1 minute and 2 seconds')
  expect(formatDuration(120)).toEqual('2 minutes')
  expect(formatDuration(3600)).toEqual('1 hour')
  expect(formatDuration(3662)).toEqual('1 hour, 1 minute and 2 seconds')
})
