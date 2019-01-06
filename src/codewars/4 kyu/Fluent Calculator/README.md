# Fluent Calculator

Kata based on [Fluent Calculator (ruby)](http://www.codewars.com/kata/fluent-calculator/discuss/ruby)

Created into a new kata because of a certain limitation the Ruby kata posseses that this kata should also have if translated, which is what lead me to create a new one.

#### Your task is to implement a simple calculator with fluent syntax
```js
var FluentCalculator = /* Magic */;
```
`FluentCalculator` should be separated in two, the **Values** and the **Operations**, one can call the other, but cannot call one of his own.

- A **Value** can call an **Operation**, but cannot call a value
```js
FluentCalculator.one.plus
FluentCalculator.one.one // undefined, if you may.
```
- An **Operation** can call a **Value**, but cannont call a operation
```js
FluentCalculator.one.plus.two // this should have a value of 3
FluentCalculator.one.plus.plus // If you replace 'one' with 'c', I could allow it. (undefined as well)
```
- Pairs of **Value** and **Operation** should be stackable to infinity
```js
FluentCalculator.one.plus.two.plus.three.minus.one.minus.two.minus.four // Should be -1
```
- A **Value** should resolve to a primitive integer
```js
FluentCalculator.one.plus.ten - 10 // Should be 1
```
### Now, the fun part... Rules

- `eval` is disabled
- **Values** in `FluentCalculator` should go from zero to ten.
- Supported **Operations** are `plus`, `minus`, `times`, `dividedBy`
- Rules mentioned above
  - `FluentCalculator` should be stackable to infinity
  - A **Value** can only call an **Operation**
  - An **Operation** can only call a **Value**
  - A **Value** should be resolvable to a primitive integer, if needed as such