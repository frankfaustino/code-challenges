# Pancake Sort

Given an array of integers `arr`:

1. Write a function `flip(arr, k)` that reverses the order of the first `k` elements in the array `arr`.
2. Write a function `pancakeSort(arr)` that sorts and returns the input array. You are allowed to use only the function `flip` you wrote in the first step in order to make changes in the array.

## Example:
```
input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
```

Analyze the time and space complexities of your solution.

__Note:__ it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the [Pancake Sorting Wikipedia page](https://en.wikipedia.org/wiki/Pancake_sorting).

## Constraints:

- [time limit] 5000ms
- [input] array.integer `arr`
- [input] integer `k`
  - 0 ≤ k
- [output] array.integer

<br />

<details><summary><b>Hints & Tips</b></summary>

- The first part is straightforward and is mainly a tool to use in the second part. If your peer has a hard time solving this part, encourage them to try one of the examples above and do it manually.
- If they still don’t understand, help them by walking them through the following algorithm (see details in the full solution):

```
function flip(arr, k):
    for i from 0 to floor(k / 2):
        tmp = arr[i]
        arr[i] = arr[k - i]
        arr[k - i] = tmp
```

- As for the second part, if your peer is stuck, you may hint that similarly to other sorting algorithms, the key part in this algorithm is to gradually sort the array through iterations.
- If the vague hint above doesn’t help, ask them to perform a simpler task first - devise an algorithm that sends the maximal element to the last place in the array, and use that as an iteration step.
- If your peer needs further assistance, guide them towards the following algorithm that iterates from the end of the array to the beginning, and in each iteration finds the `i’th` largest element and places it in the correct position in the array (see full solution for details):

```
function pancakeSort(arr):
    for i from (arr.length-1) to 1:
        maxIndex = findMaxIndexInPrefix(arr,i)
        flip(arr, maxIndex)
        flip(arr, i)

    return arr
```

</details>

<br />

<details><summary><b>Solution</b></summary>

### First part
The solution for the first part is straightforward. Given `arr` and `k`, iterate through the array the first `floor((k+1)/2)` items in the array and switch between the `i’th` item and the `k - i` item:

Pseudocode:
```
function flip(arr, k):
    pivot = floor((k+1)/ 2)
    for i from 0 to pivot:
        tmp = arr[i]
        arr[i] = arr[k - i]
        arr[k - i] = tmp
```

__Time Complexity:__ the runtime of this function in `O(k)` since the loop runs `k/2` times, and performs actions which take constant time.

__Space Complexity:__ the memory space complexity is `O(1)` since no memory is required except `i` and `tmp`.

### Second part
Notice the following property of the flipping function - if we call `flip(arr, k)`, then the previous `k-th` element in the array is now the first element. Hence, if we find the maximal element, we can shift it to be the first element by one call to `flip(arr, k)`, and then shift it to the last place by calling `flip(arr, arr.length - 1)`. We can exploit this method further, by iterating `i` from `arr.length - 1` to `1`, finding the maximal element in the current `i’th` prefix, flipping the maximal element once to move it to the first place in the array, and a second time to put it in the `i’th` place in the array.

__Pseudocode:__
```
function pancakeSort(arr):
    for i from arr.length-1 to 1:
        maxIndex = findMaxIndexInPrefix(arr,i)
        flip(arr, maxIndex)
        flip(arr, i)

    return arr


function findMaxIndexInPrefix(arr, k):
    ans = 0
    for i from first to k:
        if arr[i] > arr[ans]:
            ans = i

    return ans
```

__Running example:__

| Array | i | Current prefix | Maximal element in prefix | Next flip |
| ----- | - | -------------- | ---------------------------- | --------- |
| `[2, 3, 1, 5, 4]` | `4` | `[2, 3, 1, 5, 4]` | `5` | `flip(arr, 3)` |
| `[5, 1, 3, 2, 4]` | `4` | `[5, 1, 3, 2, 4]` | `5` | `flip(arr, 4)` |
| `[4, 2, 3, 1, 5]` | `3` | `[4, 2, 3, 1]` | `4` | `flip(arr, 0)` |
| `[4, 2, 3, 1, 5]` | `3` | `[4, 2, 3, 1]` | `4` | `flip(arr, 3)` |
| `[1, 3, 2, 4, 5]` | `2` | `[1, 3, 2]` | `3` | `flip(arr, 1)` |
| `[3, 1, 2, 4, 5]` | `2` | `[3, 1, 2]` | `3` | `flip(arr, 2)` |
| `[2, 1, 3, 4, 5]` | `1` | `[2, 1]` | `2` | `flip(arr, 0)` |
| `[2, 1, 3, 4, 5]` | `1` | `[2, 1]` | `2` | `flip(arr, 1)` |
| `[1, 2, 3, 4, 5]` | - | - | - | - |

__Time Complexity:__ let `N` be the length of the input array. There are `N-1` iterations, in each we place one element in its place. Every iteration takes `2` flips to move every member in the array to its place, and each takes `O(N)` at most. In addition, every iteration we find the maximal element, which is also done in `O(N)`. There are `N-1` iterations that take `O(N)` time thus in total the algorithm takes `O(N^2)` time.

__Space Complexity:__ the algorithm doesn’t initiate more than a few auxiliary variables, thus it is entirely in place and uses only `O(1)` space.

</details>