# Bracket Match
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, `“(())()”` is correctly matched, whereas `“)(“` and `“((”` aren’t. For instance, `“((”` could become correctly matched by adding two closing brackets at the end, so you’d return `2`.

Given a string that consists of brackets, write a function `bracketMatch` that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.

### Examples:
```
input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2
```

### Constraints:

- [time limit] 5000ms
- [input] string `text`
  - 1 ≤ text.length ≤ 5000
- [output] integer

___
## Hints
- Encourage your peer to look at examples in order to understand the rules for matching bracket strings. Make sure your peer understands that matching brackets requires more than an equal number of `'('` and `')'`.

- If your peer is stuck, suggest to consider the prefixes of matching bracket strings, and to check the difference between prefixes of matching bracket strings to the non-matching ones in the example.

- If they need a more explicit hint, you may consider pointing out that in every prefix of a matching bracket string, the number of `'('` is equal or greater than the number of `')'`.

- Finally, if your peer needs additional assistance, guide him to iterate through the input string, and use a counter in order to count the difference between the number of `'('` and `')'` for each prefix:

- Every time the counter goes below `0`, i.e. the current prefix has more `')'` than `'('` , then increment the counter by `1`, since we must add an additional `'('` to the beginning of the text in order to correct the brackets.

- At the end of the string, if we find more `'('` than `')'`, we need to add additional `')'` to the end of the string, we need to add the number of extra `'('` to the counter. This holds since for every extra `'('`, we have to put an additional `')'` to the end of the string, in order to correct the brackets.

---
## Answer
Notice that a string of matching brackets is a string that follows these rules:

- the number of `'('` and the number of `')'` are equal i.e. every open bracket is matched with a closing bracket.
- There cannot be a closing bracket before an opening bracket, i.e. in every prefix of the string, the number of `'('` is equal or greater than the number of `')'`. For example:
  - the string `“(()”` is incorrect because there is an extra `'('` that isn’t matched with a `')'` - it doesn’t follow first rule.
  - The string `“)(“` is incorrect because although it has an equal number of `'('` and `')'`, the prefix `“)”` of the string has more `')'` than `'('` - it doesn’t follow the second rule. To check how many brackets we need to add an existing string, we need to keep track of the number of `'('` and the number of `')'`, or more accurately the difference between the number of `'('` and the number of `')'`. We iterate through the string, and count the difference between the open and close brackets, if at some point there are more `')'` than `'('`, it means that to fix the string, we must add an `'('` somewhere before the current position (for example, the beginning of the string). Thus, in our algorithm we’ll add 1 to the answer and also increment the number of `'('` by one in our difference counter. This promises the second rule is correct in our string.

To make sure the first rule is correct, we simply take the difference between the `'('` and the `')'` in the text, and add it to the answer, since at the end of the string if the number isn’t equal, we’ll simply add `')'` to the end of the text (or `'('` to the beginning).

### Pseudocode:
```
function bracketMatch(text):
  diffCounter = 0
  ans = 0
  n = text.length

  for i from 0 to n-1:
    if ( text[i] == '(' ):
      diffCounter += 1
    else if ( text[i] == ')' ):
      diffCounter -= 1
    if ( diffCounter < 0 ):
      diffCounter += 1
      ans += 1

  return ans + diffCounter
```
For example, consider running the `“()))(“`:

**i — # of iteration** | **text[i]** | **ans** | **diffCounter** | **Suggested fix**
--|--|--|--|--
1 | ()))( | 0 | 1 | ()))(
2 | ()))( | 0 | 0 | ()))(
3 (a) | ()))( | 0 | -1 | ()))(
3 (b) | ()))( | 1 | 0 | (()))(
4 (a) | ()))( | 1 | -1 | (()))(
4 (b) | ()))( | 2 | 0 | ((()))(
5 (a) | ()))( | 2 | 1 | ((()))(
5 (b) | ()))( | 3 | 1 | ((()))()

### Notes:
1. Steps that are divided to ‘a’ and ‘b’ are steps where we modify `ans` and `diffCounter`.
2. The suggested fix is not actually in the code, since we only need the number of brackets.
**Time Complexity:** `O(N)`, where `N` is the length of `text`. We go through every character of `text` and for every character we carry out a constant number of steps.

**Space Complexity:** `O(1)` since we only used a constant amount of space throughout the algorithm.