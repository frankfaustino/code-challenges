const solve_graph = require('../solve_graph')

describe('Simple graph with 1 arc', () => {
  var arcs = [{ start: 'a', end: 'b' }]
  it('Should reach b', () => {
    expect(solve_graph('a', 'b', arcs)).toBe(true)
  })
  it('Should never reach c', () => {
    expect(solve_graph('a', 'c', arcs)).toBe(false)
  })
  it('Should reach start state', () => {
    expect(solve_graph('a', 'a', arcs)).toBe(true)
  })
})

describe('Complex graph with loops and intermediary nodes', () => {
  var arcs = [
    { start: 'a', end: 'b' },
    { start: 'b', end: 'c' },
    { start: 'c', end: 'a' },
    { start: 'c', end: 'd' },
    { start: 'e', end: 'a' }
  ]
  it('Should reach d', () => {
    expect(solve_graph('a', 'd', arcs)).toBe(true)
  })
  it('Should never reach nodes with no arcs leading to it', () => {
    expect(solve_graph('a', 'e', arcs)).toBe(false)
  })
  it('Should reach all nodes in a loop', () => {
    expect(solve_graph('a', 'a', arcs)).toBe(true)
    expect(solve_graph('a', 'b', arcs)).toBe(true)
    expect(solve_graph('a', 'c', arcs)).toBe(true)
  })
})
