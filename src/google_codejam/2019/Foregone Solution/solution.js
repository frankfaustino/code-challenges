
const main = input => {
  input = input.split('\n')
  const T = parseInt(input[0], 10)

  for (let i = 1; i <= T; i++) {
    console.log('Case #%d: %s', i, solve(input[i]))
  }
}

function solve(str) {
  let a = ''
  let b = ''

  for (let j = 0; j < str.length; j++) {
    if (str[j] === '4') {
      a += 3
      b += 1
    } else {
      a += str[j]
      b += 0
    }
  }

  return `${a} ${parseInt(b)}`
}

main(require('fs').readFileSync(0, 'utf8'))
