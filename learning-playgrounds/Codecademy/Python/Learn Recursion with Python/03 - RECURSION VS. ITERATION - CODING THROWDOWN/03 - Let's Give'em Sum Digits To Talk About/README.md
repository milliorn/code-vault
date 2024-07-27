# Let's Give'em Sum Digits To Talk About

Fantastic! Now we’ll switch gears and show you an iterative algorithm to sum the digits of a number.

This function, sum_digits(), produces the sum of all the digits in a positive number as if they were each a single number:

Linear - O(N), where "N" is the number of digits in the number

def sum_digits(n):
    if n < 0:
        ValueError("Inputs 0 or greater only!")
    result = 0
    while n is not 0:
        result += n % 10
        n = n // 10
    return result + n

sum_digits(12)

1 + 2

3

sum_digits(552)

5 + 5 + 2

12

sum_digits(123456789)

1 + 2 + 3 + 4...

45
