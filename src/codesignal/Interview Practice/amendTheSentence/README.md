# amendTheSentence

You have been given a string `s`, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

- Put a single space between the words.
- Convert the uppercase letters to lowercase.

#### Example

- For `s = "CodesignalIsAwesome"`, the output should be
`amendTheSentence(s) = "codesignal is awesome"`
- For `s = "Hello"`, the output should be
`amendTheSentence(s) = "hello"`.

#### Input/Output

- **[execution time limit] 4 seconds (js)**

- **[input] string s**

A string containing uppercase and lowercase English letters.

Guaranteed constraints:
`3 ≤ s.length ≤ 100`

- **[output] string**
  - The amended sentence.