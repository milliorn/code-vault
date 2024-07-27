import random
import time


def naive_search(sample_list, target):
    for i in range(len(sample_list)):
        if sample_list[i] == target:
            return i
    return -1


def binary_search(sample_list, target, low=None, high=None):
    if low is None:
        low = 0

    if high is None:
        high = len(sample_list) - 1

    if high < low:
        return -1

    midpoint = (low + high) // 2

    if sample_list[midpoint] == target:
        return midpoint
    elif target < sample_list[midpoint]:
        return binary_search(sample_list, target, low, midpoint - 1)
    else:
        return binary_search(sample_list, target, midpoint + 1, high)


if __name__ == '__main__':
    length = 1000
    sorted_list = set()
    while len(sorted_list) < length:
        sorted_list.add(random.randint(-3 * length, 3 * length))
    sorted_list = sorted(list(sorted_list))

    start = time.time()

    for target in sorted_list:
        naive_search(sorted_list, target)

    end = time.time()

    print("Native search time: ", (end - start) / length, "seconds")

    start = time.time()

    for target in sorted_list:
        binary_search(sorted_list, target)

    end = time.time()

    print("Binary search time: ", (end - start) / length, "seconds")
