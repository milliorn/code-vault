# And

Comparators aren’t the only operators available to you in Ruby. You can also use logical or boolean operators. Ruby has three: and (&&), or (||), and not (!). Boolean operators result in boolean values: true or false.

The boolean operator and, &&, only results in true when both expression on either side of && are true. Here’s how && works:

    true && true # => true
    true && false # => false
    false && true # => false
    false && false # => false

For example, 1 < 2 && 2 < 3 is true because it’s true that one is less than two and that two is less than three.
