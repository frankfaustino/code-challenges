# Simple Fun #289: Sum The Difference

# Task
You're given an `equation` that consists of `numbers, parenthesis and operations '+' and '-'`. But you don't want just to calculate it's result the way ordinary people do. You have your own rules of calculation!

Firstly, you remove all whitespaces from the equation (who needs them anyway)?

Secondly, you calculate the sum of even digits in it. If there's a '-' symbol just before the digit, you consider it as a negative number. 

Thirdly, you calculate the sum of odd digits, paying attention to the '-' symbols as well. 

Finally, you subtract the sum of the odd digits from the sum of even digits. The obtained result is the result of the equation.

Now you need to write a program that does this kind of calculation for you. Given an equation, calculate it's value with your very own algorithm.

Note: `equation` can be confusing and invalid ;-)

# Input/Output

`[input]` string `equation`

An `equation` (not necessarily correct) consisting of digits, parenthesis and operators '-' and '+'.

`0 ≤ equation.length ≤ 100`

`[output]` an integer

Result of the equation.

# Example

For `equation = "(-100) + 100 - (-200) + 1"`, the output should be `-3`.

remove the whitespaces:

"(<font color="#ee0000">-1</font>00)+<font color="#ee0000">1</font>00-(<font color="#00ee00">-2</font>00)+<font color="#ee0000">1</font>"

there's only one even digit, which is <font color="#00ee00">-2</font>;

odd digits sum up to <font color="#ee0000">-1 + 1 + 1 = 1</font>;

their difference is <font color="#00ee00">-2</font> - <font color="#ee0000">1</font> = -3`.

For `equation = "(-25) + (-75) + 50 - 40 - (22 + 2)"`, the output should be `-8`.

remove the whitespaces:

"(<font color="#00ee00">-2</font><font color="#ee0000">5</font>)+(<font color="#ee0000">-75</font>)+<font color="#ee0000">5</font>0<font color="#00ee00">-4</font>0-(<font color="#00ee00">22</font>+<font color="#00ee00">2</font>)"

even digits sum up to <font color="#00ee00">-2 - 4 + 2 + 2 + 2 = 0</font>;

odd digits sum up to <font color="#ee0000">5 - 7 + 5 + 5 = 8</font>;

their difference is <font color="#00ee00">0</font> - <font color="#ee0000">8</font> = -8.