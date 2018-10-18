# Highest Product of Three

Given an array of integers, write a function that finds the highest product of three from amongst any three integers in the array. You can assume any input arrays have at least three integers. 

You'll need to take into account the fact that it is possible for the highest product of three from a given array to be the product of two negative numbers and a positive number. 

For example, given the array `[-90, -15, 6, 9, 10]`, the highest product of any three numbers from this array is `-90 * -15 * 10` which yields `13,500`.

Remember to start off by thinking through and coming up with an algorithm that will solve this problem regardless of what programming language you use. Once you have an algorithm, implement it. In the case of this problem, the C implementation should be very similar to the JavaScript implementation in terms of code syntax and structure. 

The macros `MAX`, `MIN`, and `SIZE` have already been defined for you. Use them just like you would any other function. 

## Solution
<details>
<summary>View solution</summary>
This solution's time complexity is <i>O(n)</i>. Any integer in the array could potentially be part of the greatest product of three integers, so we must <i>look</i> at <i>each integer</i>.

<i>O(n)</i> is achieved using the <b>greedy</b> approach, which is to choose the "best" option at each step. In order to do this, we have to track a few things:

- current highest product of 3 integers
- current highest product of 2 integers
- current lowest product of 2 integers
- current highest integer
- and current lowest integer

<i>Consider the following example:</i>

```js
const array = [1, 10, -5, 1, -100]
```

The highest product of 3 (`−100 ∗ −5 ∗ 10`) from that array is `5000` but up until the last iteration, the highest product of 3 was `10` (`1 * 10 * 1`). In order to get the correct highest product of 3, we'd have to have kept a reference to `-5` and `10 * -5`.

```js
function highestProductOf3(arr) {
  if (arr.length < 3) {
    throw new Error('There\'s less than 3 items!')
  }
  // We're going to start the the 3rd item (index 2)
  // So we pre-populate our variables with the first few items
  // Highest product of 3 (h3) will end up checking itself during the first iteration
  let h3 = arr[0] * arr[1] * arr[2]
  let h2 = arr[0] * arr[1]
  let l2 = arr[0] * arr[1]
  let h  = Math.max(arr[0], arr[1])
  let l  = Math.min(arr[0], arr[1])

  for (let i = 2; i < arr.length; i++) {
    // Do we have a new highest product of 3?
    // It's either the current highest
    // or the current times the highest product of two
    // or the current times the lowest product of two

    h3 = Math.max(h3, h2 * arr[i], l2 * arr[i])
    // Do we have a new highest product of two?

    h2 = Math.max(h2, h * arr[i], l * arr[i])
    // Do we have a new lowest product of two?
    l2 = Math.min(l2, h * arr[i], l * arr[i])

    // Do we have a new highest?
    h  = Math.max(h, arr[i])

    // Do we have a new lowest?
    l  = Math.min(l, arr[i])
  }

  return h3
}
```
</details>