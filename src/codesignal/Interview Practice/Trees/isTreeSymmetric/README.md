# isTreeSymmetric

Given a binary tree `t`, determine whether it is _symmetric_ around its center, i.e. each side mirrors the other.

#### Example 1

```js
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

isTreeSymmetric(t) = true
```

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

#### Example 2

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
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

isTreeSymmetric(t) = false
```

```
    1
   / \
  2   2
   \   \
   3    3
```

#### Input/Output

- **[execution time limit] 4 seconds (js)**

- **[input] tree.integer t**

  A binary tree of integers.

  _Guaranteed constraints:_
  ```
  0 ≤ tree size < 5 · 10⁴
  -1000 ≤ node value ≤ 1000
  ```

- **[output] boolean**

  Return `true` if `t` is symmetric and `false` otherwise.