const { BinaryTreeNode, dfsIterative, wrappingObject } = require('../depthFirstSearch')

describe('Lambda School — Depth-First Search', () => {
  let root

  beforeAll(() => {
    root = new BinaryTreeNode(6)
    const l1 = root.insertLeft(10)
    const l2 = l1.insertLeft(9)
    const r1 = root.insertRight(17)
    const r2 = r1.insertRight(89)
  })

  test('Iterative', () => {
    const result = []
    dfsIterative(root, value => result.push(value))
    expect(result).toEqual([6, 10, 9, 17, 89])
  })

  test('Recursive', () => {
    const result = []
    const mock = jest.spyOn(wrappingObject, 'dfsRecursive')
    wrappingObject.dfsRecursive(root, value => result.push(value))
    expect(result).toEqual([6, 10, 9, 17, 89])
    expect(mock).toHaveBeenCalledTimes(5)
  })
})