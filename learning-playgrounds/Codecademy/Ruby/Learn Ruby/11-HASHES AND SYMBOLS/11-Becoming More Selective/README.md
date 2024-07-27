# Becoming More Selective

We know how to grab a specific value from a hash by specifying the associated key, but what if we want to filter a hash for values that meet certain criteria? For that, we can use .select.

    grades = { alice: 100,
        bob: 92,
        chris: 95,
        dave: 97
    }

    grades.select { |name, grade| grade < 97 }
    # ==> { :bob => 92, :chris => 95 }

    grades.select { |k, v| k == :alice }
    # ==> { :alice => 100 }

In the example above, we first create a grades hash that maps symbols to integers.
Then we call the .select method and pass in a block of code. The block contains an expression for selecting matching key/value pairs. It returns a hash containing :bob and :chris.
Finally, we call the .select method again. Our block looks only for the key :alice. This is an inefficient method of getting a key/value pair, but it shows that .select does not modify the hash.
(Here we’re using “name” or “k” to stand for the key and “grade” or “v” to stand for the value, but as usual with blocks, you can call your variables whatever you like.)
