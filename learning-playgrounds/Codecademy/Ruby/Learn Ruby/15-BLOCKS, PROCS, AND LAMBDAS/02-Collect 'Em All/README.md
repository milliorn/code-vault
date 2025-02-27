# Collect 'Em All

Good! There are a bunch of really useful Ruby methods that take blocks. One we haven’t covered yet is collect.

The collect method takes a block and applies the expression in the block to every element in an array. Check it out:

    my_nums = [1, 2, 3]
    my_nums.collect { |num| num ** 2 }

    # ==> [1, 4, 9]

If we look at the value of my_nums, though, we’ll see it hasn’t changed:

    my_nums

    # ==> [1, 2, 3]

This is because .collect returns a copy of my_nums, but doesn’t change (or mutate) the original my_nums array. If we want to do that, we can use .collect! with an exclamation point:

    my_nums.collect! { |num| num ** 2 }

    # ==> [1, 4, 9]

    my_nums

    # ==> [1, 4, 9]

Recall that the ! in Ruby means “this method could do something dangerous or unexpected!” In this case, it mutates the original array instead of creating a new one.
