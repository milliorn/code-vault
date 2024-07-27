# Being Pushy

Speaking of pushing to arrays, Ruby has some nice shortcuts for common method names. As luck would have it, one is for .push!

Instead of typing out the .push method name, you can simply use <<, the concatenation operator (also known as “the shovel”) to add an element to the end of an array:

    [1, 2, 3] << 4
    # ==> [1, 2, 3, 4]

Good news: it also works on strings! You can do:

    "Yukihiro " << "Matsumoto"
    # ==> "Yukihiro Matsumoto"
