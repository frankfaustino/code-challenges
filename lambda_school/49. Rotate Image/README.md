# Rotate Image

Given an image represented by an `NxN` matrix, where each pixel in the image is an integer from `0 - 9`, write a function to rotate the image by 90 degrees counter-clockwise.

Can you do this in place?


#### Example 1.
```js
[
  [1, 2],
  [3, 4]
]
```
Rotated →
```js
[
  [2, 4],
  [1, 3]
]
```

#### Example 2.
```js
[
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
]
```
Rotated →
```js
[
  [9, 0, 1, 2, 3],
  [9, 0, 1, 2, 3],
  [5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
]
```