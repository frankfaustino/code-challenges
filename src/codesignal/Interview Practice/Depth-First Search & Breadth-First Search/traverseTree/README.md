# Traverse Tree

__Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.__

Given a binary tree of integers `t`, return its node values in the following format:

- The first element should be the value of the tree root
- The next elements should be the values of the nodes at height `1` (i.e. the root children), ordered from the leftmost to the rightmost one
- The elements after that should be the values of the nodes at height `2` (i.e. the children of the nodes at height `1`) ordered in the same way
- Etc.

## Example

For

```js
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}
```

the output should be
`traverseTree(t) = [1, 2, 4, 3, 5]`

This `t` looks like this:

```
     1
   /   \
  2     4
   \   /
    3 5
```

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] tree.integer t

Guaranteed constraints:
`0 ≤ tree size ≤ 10⁴`

- [output] array.integer
  - An array that contains the values at `t`'s nodes, ordered as described above.
