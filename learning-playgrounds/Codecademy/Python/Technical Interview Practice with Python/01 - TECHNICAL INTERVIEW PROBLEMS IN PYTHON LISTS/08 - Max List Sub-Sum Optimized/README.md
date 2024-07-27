# Max List Sub-Sum: Optimized

Our last solution had a cubic time complexity: O(N^3).

One iteration for the length of the list O(N), inside another iteration for the length of the list O(N^2), inside the inner loop, we copied a sub-list: O(N^3).

Let’s optimize using an important concept: We don’t always need to create every possible outcome to know what’s best.

Do we need to make every sub-list? No! We can visit each value within the list and keep a running tally of sums.

Let’s see what information we can gather in a single pass:

    # <> will mark the current element
    nums = [1, -7, 2, 15, -11, 2]
    most_seen = 0
    current_max_sub_sum = 0

    [<1>, -7, 2, 15, -11, 2]
    most_seen = 1
    current_max_sub_sum = 1

    [1, <-7>, 2, 15, -11, 2]
    most_seen = 1
    current_max_sub_sum = -6

    # our sum is negative
    # anything positive which comes after
    # will be better without this "sub-list"
    # reset current max to 0!

    current_max_sub_sum = 0

    [1, -7, <2>, 15, -11, 2]
    most_seen = 2
    current_max_sub_sum = 2

    [1, -7, 2, <15>, -11, 2]
    most_seen = 17
    current_max_sub_sum = 17

    [1, -7, 2, 15, <-11>, 2]
    most_seen = 17
    current_max_sub_sum = 6

    # current sum went down, but not negative
    # no need to reset!

    [1, -7, 2, 15, -11, <2>]
    most_seen = 17
    current_max_sub_sum = 8
