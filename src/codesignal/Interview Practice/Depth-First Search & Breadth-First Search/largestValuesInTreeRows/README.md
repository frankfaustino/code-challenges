# Largest Values in Tree Rows

You have a binary tree `t`. Your task is to find the largest value in each __row__ of this tree. In a tree, a __row__ is a set of nodes that have equal depth. For example, a __row__ with depth 0 is a tree root, a row with depth `1` is composed of the root's children, etc.

Return an array in which the first element is the largest value in the __row__ with depth `0`, the second element is the largest value in the __row__ with depth `1`, the third element is the largest element in the __row__ with depth `2`, etc.

## Example

For

```js
t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": null,
        "right": null
    },
    "right": {
        "value": 7,
        "left": null,
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    }
}
```

the output should be `largestValuesInTreeRows(t) = [-1, 7, 1]`

The tree in the example looks like this:
```
   -1
   / \
  5   7
       \
        1
```

- In the __row__ with depth `0`, there is only one vertex - the root with value `-1`
- In the __row__ with depth `1`, there are two vertices with values `5` and `7`, so the largest value here is `7`
- In the __row__ with depth `2`, there is only one vertex with value `1`

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] tree.integer t

A binary tree of integers.

_Guaranteed constraints:_
```
0 ≤ tree size ≤ 5 · 10⁴
-1000 ≤ node value ≤ 1000
```

- [output] array.integer
  - An array of the largest values in each row of t.