# greedy algorithm
import fractions
import math


def greedy(mice, holes):
    # Base - num of mice and holes should be the same
    if len(mice) != len(holes):
        return "Number of mice and holes not the same"
    # Sort first
    mice.sort()
    holes.sort()
    # Finding max difference between ith mice and hole
    max_diff = 0

    for i in range(len(mice)):
        if max_diff < abs(mice[i] - holes[i]):
            max_diff = abs(mice[i] - holes[i])

    return max_diff


mice = [4, -4, 2]

# Hole positions
holes = [4, 0, 5]

# The required answer is returned from the function
min_time = greedy(mice, holes)

print("The last mouse gets into the hole in time:", min_time)

# Fractional knapsack


def fractional_knapsack(value, weight, capacity):

    items = list(range(len(value)))
    print(items)

    ratio = [v//w for v, w in zip(value, weight)]
    print(ratio)

    srt_ratios = sorted(ratio, reverse=True)
    print(srt_ratios)

    items.sort(key=lambda i: ratio[i], reverse=True)
    print(items)

    max_value = 0
    fractions = [0] * len(value)
    print(fractions)

    for i in items:
        if weight[i] <= capacity:
            fractions[i] = 1
            max_value += value[i]
            capacity -= weight[i]
            print(max_value)
        else:
            fractions[i] = capacity // weight[i]
            max_value += value[i] * capacity // weight[i]

    return max_value


weight = [30, 50, 10, 70, 40]
value = [150, 100, 90, 140, 120]
capacity = 150
print(fractional_knapsack(value, weight, capacity))

# Egyptian fractions


def egyptian_frac(numerator, denominator):
    # Creating our list of denominators for our Eqyptian Fractions
    egypt_lst = []
    while numerator != 0:
        x = math.ceil(denominator/numerator)
        egypt_lst.append(x)

        numerator = x * numerator - denominator
        denominator *= x
    str = ""
    for ones in egypt_lst:
        str += "1/{0} + ".format(ones)
    final_string = str[:-3]
    return final_string


print(egyptian_frac(7, 12))
