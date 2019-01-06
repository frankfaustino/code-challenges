const EmptyBinaryTree = require('../functionalBinaryTrees')

describe('Simple tree operations', () => {
  let mt, t1, t2, t3, _ref

  beforeAll(() => {
    mt = new EmptyBinaryTree()
    t1 = mt
      .insert('b')
      .insert('a')
      .insert('c')
    t2 = t1.remove('a')
    t3 = t1.remove('z')
  })

  it('Basic tree counting', () => {
    describe('Empty tree isEmpty()', () => expect(mt.isEmpty()).toBe(true))
    describe('Non-empty tree is not isEmpty()', () =>
      expect(!t1.isEmpty()).toBe(true))
    describe('Empty tree has depth zero.', () => expect(mt.depth()).toBe(0))
    describe('Tree [ a) //[ b [] [] ] [ c [] [] ] ] depth 2', () =>
      expect(t1.depth()).toBe(2))
    describe('Empty tree has zero non-empty nodes', () =>
      expect(mt.count()).toBe(0))
    describe('Tree a, b, c has three nodes', () => expect(t1.count()).toBe(3))
  })

  it('Simple tests of insert', () => {
    describe("Empty tree does not contain 'a'", () =>
      expect(!mt.contains('a')).toBe(true))
    describe("Tree a, b, c contains 'a'", () =>
      expect(t1.contains('a')).toBe(true))
    describe("Tree a, b, c contains 'b'", () =>
      expect(t1.contains('b')).toBe(true))
    describe("Tree a, b, c contains 'c'", () =>
      expect(t1.contains('c')).toBe(true))
  })

  it('Simple tests of remove', () => {
    describe("Tree a, b, c no longer contains 'a' after remove", () =>
      expect(t2.contains('a')).toBe(false))
    describe("Tree a, b, c with 'a' removed shares 'c'", () =>
      expect(t2.right).toEqual(t1.right))
    describe('Removing an absent item leaves tree untouched.', () =>
      expect(t3).toEqual(t1))
  })

  it('Traversal', () => {
    const doTraversal = (tree, traversal) => {
      const nodes = []
      tree[traversal](x => nodes.push(x))
      return nodes.join('')
    }

    describe('Traverse empty tree', () =>
      expect(doTraversal(mt, 'inorder')).toEqual(''))
    describe('Traverse inorder', () =>
      expect(doTraversal(t1, 'inorder')).toEqual('abc'))
    describe('Traverse preorder', () =>
      expect(doTraversal(t1, 'preorder')).toEqual('bac'))
    describe('Traverse postorder', () =>
      expect(doTraversal(t1, 'postorder')).toEqual('acb'))
  })
})
