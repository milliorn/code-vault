# linear search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i


arr = [2, 4, 8, 9, 10, 16, 22]
target = 10
print(linear_search(arr, target))

# binary search


def binary_search_iterative(arr, start, end, target):
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            start = mid + 1
        elif arr[mid] == target:
            end = mid - 1
        else:
            return mid
    return start


print(binary_search_iterative(arr, 0, len(arr) - 1, target))

# bubble sort


def bubble_sort(arr):
    iterations = 0
    for i in range(len(arr)):
        for j in range(len(arr)-i-1):
            iterations += 1
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr, iterations


print(bubble_sort(arr))

# insertion sort


def insert_sort(arr):
    for j in range(1, len(arr)):
        key = arr[j]
        i = j - 1
        while i >= 0 and arr[i] > key:
            arr[i + 1] = arr[i]
            i -= 1
        arr[i + 1] = key
    return arr


print(insert_sort([5, 2, 4, 6, 1, 3]))
