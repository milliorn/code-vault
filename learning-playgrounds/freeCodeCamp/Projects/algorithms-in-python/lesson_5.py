# ugly numbers
def ugly_numbers(x, y):
    while x % y == 0:
        x = x / y
    return x


print(ugly_numbers(6, 2))

# Function for checking if a number is ugly or not


def ugly_check(num):
    num = ugly_numbers(num, 2)
    num = ugly_numbers(num, 3)
    num = ugly_numbers(num, 5)
    if num == 1:
        return True
    else:
        return False


print(ugly_check(6))

# Function for finding the nth ugly number


def nth_ugly(n):
    i = 1
    # ugly number count
    counter = 1

    # Looping through all integers until ugly count becomes n
    while n > counter:
        i += 1
        if ugly_check(i):
            counter += 1
    return i


no = nth_ugly(15)
print("15th Ugly number is:", no)

# DP method


def nthUgly(n):
    dpUgly = [0] * n
    dpUgly[0] = 1

    u2 = u3 = u5 = 0

    multiple_2 = 2
    multiple_3 = 3
    multiple_5 = 5

    for i in range(1, n):
        dpUgly[i] = min(multiple_2, multiple_3, multiple_5)

        if dpUgly[i] == multiple_2:
            u2 += 1
            multiple_2 = dpUgly[u2] * 2

        if dpUgly[i] == multiple_3:
            u3 += 1
            multiple_3 = dpUgly[u3] * 3

        if dpUgly[i] == multiple_5:
            u5 += 1
            multiple_5 = dpUgly[u5] * 5

    return dpUgly[n - 1]


n = 15
print("15th ugly number is:", nthUgly(n))
