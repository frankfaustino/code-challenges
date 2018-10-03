# Merge Sort

Sort an array of integers using the **merge sort algorithm.**

First divide the list into its smallest unit (arrays with a single item in them)

Then compare each element with the adjacent list and combine them in the proper order.

Repeat until the entire array is sorted.

#### Example:

- Input: `[1, 6, 3, 2, 4, 7]`

- Expected Output: `[1, 2, 3, 4, 6, 7]`

```js
[1, 6, 3, 2, 4, 7] → [1, 2, 3, 4, 6, 7]

[1, 6, 3][2, 4, 7]

[1][6, 3][2][4, 7]

[1][6][3][2][4][7]

[1, 3][6][2][4][7]

[1, 3][6][2, 4][7]

[1, 3, 6][2, 4][7]

[1, 3, 6][2, 4, 7]

[1, 2, 3, 4, 6, 7]
```

#### Reference
https://en.wikipedia.org/wiki/Merge_sort