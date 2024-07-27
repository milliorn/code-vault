def multiplication(n1, n2):
    return 0 if n1 == 0 or n2 == 0 else n1 + multiplication(n1, n2 - 1)


# test cases
print(multiplication(3, 7) == 21)
print(multiplication(5, 5) == 25)
print(multiplication(0, 4) == 0)
