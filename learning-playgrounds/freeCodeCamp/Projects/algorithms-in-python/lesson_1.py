from math import factorial

# Factorials


def factorials(n):
    fact = 1
    for i in range(2, n + 1):
        fact *= i
        print(fact)
    return fact


print(factorials(5))


def recurs_factorial(n):
    if n == 1:
        return n
    else:
        temp = recurs_factorial(n - 1)
        return temp * n


print(recurs_factorial(5))


def recur_factorial(n):
    if n == 1:
        return n
    else:
        return n * recur_factorial(n - 1)


print(recur_factorial(5))

# permutation


def permutations(string, pocket=""):
    if (len(string) == 0):
        print(pocket)
    else:
        for i in range(len(string)):
            letter = string[i]
            front = string[0:i]
            back = string[i+1:]
            together = front + back
            permutations(together, letter + pocket)


print(permutations("ABC", ""))
