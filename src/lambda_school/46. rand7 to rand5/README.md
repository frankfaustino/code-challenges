# `rand7` to `rand5`

Using a function `rand7` that generates a random number from 1 to 7, how would you write a function that generates a number with equal probability from 1 to 5?

You **must** use `rand7` to generate the random number in the function `rand5`.
You **may NOT** use `Math.random` in `rand5`.

```js
function rand7() {
  return 1 + Math.floor(Math.random() * 7)
}

function rand5() {
  // Code here
}
```