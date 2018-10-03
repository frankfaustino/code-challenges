# Source : Summing a number's digits
# Author : Frank Faustino
# Date   : 2018-09-26
# Lang   : Python


def sumDigits(number):
    output = 0
    if number < 0: number *= -1

    while number > 0:
        output += number % 10
        number = int(number / 10)

    return output

print(sumDigits(10))  # Returns 1
print(sumDigits(99))  # Returns 18
print(sumDigits(-32)) # Returns 5