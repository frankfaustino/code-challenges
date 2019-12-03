const { readFileSync } = require('fs')

module.exports = (day, fileName) => {
  const inputPath = require.resolve(`./day_${day}/${fileName}`)
  return readFileSync(inputPath, 'utf8')
}
