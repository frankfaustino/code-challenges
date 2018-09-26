# Greedy Decoding

You've intercepted a top secret message that's been encoded using a simple cipher. The original message consisted of uppercase English letters, each of which have been converted to a number, using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Since the message now appears as an uninterrupted string of digits, there are many ways it could be interpreted, but we're going to do it in the greediest way possible — any time the next number could be interpreted as a double-digit number, we'll interpret it that way (ignoring the possibility of a single-digit interpretation).

It is guaranteed that `message` is a valid encoding, and no number should be interpreted as having a leading zero.

#### Example

• For `message = "195318520"`, the output should be `greedyDecoding(message) = "SECRET"`.

![example](greedyEncoding.png)

• There are other possible decodings, but this is the greediest one.

For `message = "89"`, the output should be `greedyDecoding(message) = "HI"`.

There's only one way to interpret this one, since there's no `89`th letter in the alphabet.

#### Input / Output

- **[execution time limit] 4 seconds (js)**

- **[input] string message**

  A string of digits representing the encoded message.

  *Guaranteed constraints:*  
  `0 ≤ message.length ≤ 105`  
`message[i] ∈ {"0" - "9"}`

- **[output] string**

  A string representing the greediest possible interpretation of the decoded message.
