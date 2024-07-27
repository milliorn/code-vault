def factorial(x):
    li = list(range(1, x))
    n = 1
    for l in li:
        n += l * n
    return n


# test cases
print(factorial(3) == 6)
print(factorial(0) == 1)
print(factorial(5) == 120)
