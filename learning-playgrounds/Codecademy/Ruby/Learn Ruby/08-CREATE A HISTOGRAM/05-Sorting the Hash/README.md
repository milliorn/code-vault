# Sorting the Hash

Great! We have a hash full of word / frequency key-value pairs. Now we need to figure out a way to get our information in the order we want it.

    colors = {
        "blue" => 3,
        "green" => 1,
        "red" => 2
    }

    colors = colors.sort_by do |color, count|
        count
    end
    colors.reverse!

In the example above, we first create a hash called colors that maps color strings to numbers.
Then, we sort colors into green, red, and blue, from smallest to largest by count. Just so you know, the .sort_by function returns an array of arrays, but that’s fine for our purposes.
Finally, we reverse the array order so that the colors with the largest counts are first.
Can you do the same thing with the frequencies hash?
