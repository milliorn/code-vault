# Iterating Over the Hash

Almost there! Finally, we’ll need to iterate over the array to print out each key-value pair to the console.

    fruit = {
        "apple" => 2,
        "banana" => 3,
        "cherry" => 5
    }

    fruit.each do |name, count|
        puts name + " " + count.to_s
    end

In the example above, we create a hash called fruit that maps names of fruit to the amount that we own.
Then, we iterate over .each key/value pair, storing the key as name and the value as count.
Finally, we print out the key and value separated by a space. Note that we must first convert the value from a number to a string using .to_s before we can concatenate it.
