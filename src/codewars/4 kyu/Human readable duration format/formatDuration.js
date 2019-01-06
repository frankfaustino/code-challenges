// Source : https://www.codewars.com/kata/human-readable-duration-format/javascript
// Author : Frank Faustino
// Date   : 2019-01-05

function formatDuration(time) {
  if (time === 0) {
    return 'now'
  }
  let seconds = time
  const output = []
  const duration = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }

  Object.entries(duration).forEach(([key, val]) => {
    if (seconds >= val) {
      const count = Math.floor(seconds / val)
      output.push(`${count} ${key}${count > 1 ? 's': ''}`)
      seconds = seconds % val
    }
  })

  const { length } = output
  return length < 2 ? output[0] : `${output.splice(0, length - 1).join(', ')} and ${output[0]}`
}

module.exports = formatDuration