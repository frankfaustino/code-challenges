# Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b` keeping their order.

```rust
array_diff(vec![1,2], vec![1]) == vec![2]
```

If a value is present in `b`, all of its occurrences must be removed from the other:

```rust
array_diff(vec![1,2,2,2,3], vec![2]) == vec![1,3]
```

