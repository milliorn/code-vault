# Iterating Over Hashes

We can also iterate over hashes using the .each method. For example, we could do

    my_hash.each do |key, value|
        puts my_hash[]
    end

This will print out a list of keys and values from my_hash, each on its own line.
