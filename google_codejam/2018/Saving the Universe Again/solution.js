const main = input => {
  input = input.split('\n')
  const T = parseInt(input[0], 10)
  for (let i = 1; i <= T; i++) {
    console.log('Case #%d: %s', i, solve(input[i]))
  }
}

const solve = input => {
  let [ shield, program ] = input.split(' ')
  shield = parseInt(shield, 10)

  const damage = str => {
    let dmg = 0
    let charge = 1

    for (let i = 0; i < program.length; i++) {
      program[i] == 'S' ? dmg += charge : charge *= 2
    }

    return dmg
  }

  let swapped = 0
  let stop = 0

  while (damage(program) > shield) {
    for (let i = program.length - 2; i >= 0; i--) {
      if (program[i] === 'C' && program[i + 1] === 'S') {
        program = program.substr(0, i) + 'S' + program.substr(i + 1)
        program = program.substr(0, i + 1) + 'C' + program.substr(i + 2)
        swapped++
      }
    }
    stop++
    if (stop > program.length) break
  }
  return damage(program) > shield ? 'IMPOSSIBLE' : swapped
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
