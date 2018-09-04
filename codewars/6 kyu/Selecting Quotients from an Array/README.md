# Selecting Quotients from an Array

1. You are given an array of positive integers as argument `arr`. You must generate all the possible divisions between each pair of its elements that outputs an integer value.

#### For example:

```py
arr = [2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6]
```
You must then create a list, sorted by the quotient value, containing the corresponding numerator and denominator taken from the given array.

#### Format: `(quotient, (numerator, denominator))`

```py
[(2, (4, 2)), (2, (12, 6)), (2, (12, 6)), (2, (12, 6)), (2, (12, 6)), (2, (24, 12)), (2, (24, 12)), (3, (6, 2)), (3, (6, 2)), (3, (12, 4)), (3, (12, 4)), (3, (15, 5)), (3, (27, 9)), (4, (16, 4)), (4, (24, 6)), (4, (24, 6)), (5, (25, 5)), (6, (12, 2)), (6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]
```

2. Eliminate all the duplicated cases giving it only once.

`(2, (12, 6))` occurs four times, for example (we have more cases)

#### The data is reduced to:
```py
[(2, (4, 2)), (2, (12, 6)), (2, (24, 12)), (3, (6, 2)), (3, (12, 4)), (3, (15, 5)), (3, (27, 9)), (4, (16, 4)), (4, (24, 6)), (5, (25, 5)), (6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]
```

3. Select the quotients that are higher or equal than a certain given value.

If the given value is 6 will reduce even more our cases:

```py
[(6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]
```

4. Select the results by even or odd quotient value.

Suppose that we are interested in odd values only, we will finally have:

```py
[(7, (49, 7)), (47, (94, 2))]
```

So our function `sel_quot()` may receive the following the arguments in the following order outputting the corresponding result:

```py
# same array as above (arr)
dir_str = 'odd'
sel_quot(arr, 6, dir_str) == [(7, (49, 7)), (47, (94, 2))]
```

#### Our function should be able to receive only an array and an integer value. (Without doing the even/odd selection)
```py
# same array (arr)
sel_quot(arr, 6) == [(6, (12, 2)), (6, (24, 4)), (7, (49, 7)), (8, (16, 2)), (12, (24, 2)), (47, (94, 2))]
```

#### Assumptions:

All integer values in the array, including `m`, will be `>= 2`.

The strings will be exactly given as `'even'` and `'odd'` or `'Even'` and `'Odd'`.

<hr>

Source: https://www.codewars.com/kata/selecting-quotients-from-an-array/train/python