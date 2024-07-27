import numpy as np

x = np.array([[1, 2], [2, 3]])
y = np.array([[2, 3], [3, 4]])

A = [-5, -23, 5, 0, 23, -6, 23, 67]

# merge sort


def merge_sort(left, right):
    C = []
    while min(len(left), len(right)) > 0:
        if left[0] > right[0]:
            insert = right.pop(0)
            C.append(insert)
        elif left[0] <= right[0]:
            insert = left.pop(0)
            C.append(insert)
    if len(left) > 0:
        for i in left:
            C.append(i)
    if len(right) > 0:
        for i in right:
            C.append(i)
    return C


left = [2, 5, 6, 10]
right = [3, 4, 12, 20]
print(merge_sort(left, right))

# sort recursively


def sortArray(A):
    if len(A) <= 1:
        return A
    middle = len(A) // 2
    left = sortArray(A[:middle])
    right = sortArray(A[middle:])
    merged = []
    while left and right:
        if left[0] <= right[0]:
            merged.append(left.pop(0))
        else:
            merged.append(right.pop(0))
    merged.extend(right if right else left)
    return merged


print(sortArray(A))


def strassen_iter(x, y):
    # Base case when size of matrices is 1x1
    if len(x) == 1:
        return x * y

    # Splitting the matrices into quadrants. See graphic
    a, b, c, d = x[0, 0], x[0, 1], x[1, 0], x[1, 1]
    e, f, g, h = y[0, 0], y[0, 1], y[1, 0], y[1, 1]

    # Computing the 7 products - this is where the magic happens!
    p1 = a * (f - h)
    p2 = (a + b) * h
    p3 = (c + d) * e
    p4 = d * (g - e)
    p5 = (a + d) * (e + h)
    p6 = (b - d) * (g + h)
    p7 = (a - c) * (e + f)

    # Computing the values of the 4 quadrants of the final matrix c
    c1 = (p5 + p4 - p2 + p6)
    c2 = (p1 + p2)
    c3 = (p3 + p4)
    c4 = (p1 + p5 - p3 - p7)

    return np.array([[c1, c2], [c3, c4]])


print(strassen_iter(x, y))
