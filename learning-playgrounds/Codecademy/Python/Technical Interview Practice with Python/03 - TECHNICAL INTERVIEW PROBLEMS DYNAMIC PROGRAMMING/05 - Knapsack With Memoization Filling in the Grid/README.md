# Knapsack With Memoization: Filling in the Grid

With our grid built, we only need to fill it in to find our optimal value. Remember: each column is the capacity of a knapsack and each row is an item we can add. The first row is “no item” and the first column is “no capacity”.

We’ll consider the diamond first. It weighs 1 pound and is worth $7. For each capacity after 0 (our first column), we can place the diamond in that location. Some capacities have spare weight, but that’s okay.

            # Capacity: 0| 1| 2| 3| 4|
    #____________________________________
    # first row: no item! [0, 0, 0, 0, 0]
    # second row: Diamond [0, 7, 7, 7, 7]

Let’s add a trophy worth $6 and weighing 2 lbs.

The trophy doesn’t fit in a 1lb. knapsack, so we look at the previous row and fill this section with that value.

            # Capacity: 0| 1| 2| 3| 4|
    #____________________________________
    # first row: no item! [0, 0, 0, 0, 0]
    # second row: Diamond [0, (7), 7, 7, 7]
    # third row: Trophy   [0, (7), ?, ?, ?]

The trophy fits in the 2lb. knapsack; we have two options:

    Trophy plus value stored at the remaining weight
    The previous best in the 2lb. sub-knapsack.

Adding the 2 lb. trophy would mean 0 remaining capacity. This is why “no capacity”, “no item” values live in our grid.

Option 1 = 6 (trophy value) + 0 (“no capacity” value)

Option 2 = 7 (the previous best)

By weighing our options, we see this section should store the diamond value even though there’s spare weight. We’re maximizing for value!

            # Capacity: 0| 1| 2| 3| 4|
    #____________________________________
    # first row: no item! [0, 0, 0, 0, 0]
    # second row: Diamond [0, 7, 7, 7, 7]
    # third row: Trophy   [0, 7, 7, ?, ?]

We repeat this process with the 3lb. sub-knapsack:

Option 1 = 6 (trophy value) + 7 (1lb. sub-knapsack value) Option 2 = 7 (the previous best)

            # Capacity: 0| 1| 2| 3| 4|
    #____________________________________
    # first row: no item! [0, 0, 0, 0, 0]
    # second row: Diamond [0, 7, 7, 7, 7]
    # third row: Trophy   [0, 7, 7, 13, ?]

One last time for the 4lb. knapsack:

Option 1 = 6 (trophy value) + 7 (2lb. sub-knapsack value) Option 2 = 7 (the previous best)

            # Capacity: 0| 1| 2| 3| 4|
    #____________________________________
    # first row: no item! [0, 0, 0, 0, 0]
    # second row: Diamond [0, 7, 7, 7, 7]
    # third row: Trophy   [0, 7, 7, 13, 13]

Note that the best value is stored in our bottom-right section. This is true no matter how many items we add.

The order we consider items is irrelevant for the final value. Here’s how the grid would look trophy-first:

            # Capacity: 0| 1| 2| 3| 4|
    #____________________________________
    # first row: no item! [0, 0, 0, 0, 0]
    # second row: Trophy  [0, 0, 6, 6, 6]
    # third row: Diamond  [0, 7, 7, 13, 13]
