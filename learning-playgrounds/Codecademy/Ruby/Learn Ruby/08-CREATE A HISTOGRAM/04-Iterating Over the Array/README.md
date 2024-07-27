# Iterating Over the Array

Perfect! Next up: we want to iterate over words to add each word to our frequencies hash, one at a time.

    colors = { "red" => 2, "blue" => 3 }
    colors["blue"] += 1
    puts colors["blue"]

In the above example, we first create a hash mapping strings to integers.
Then, we increment the value stored by "blue" by 1.
Finally, we print out 4, the value stored by "blue".
