# Working with Ranges

So far we have added, accessed, and removed single elements in a list. What if we wanted to add, access, or remove multiple elements at once?

In the world of lists we call a subsequence of elements a range. For example, this list has 5 elements:

    [ "first", "second", "third", "fourth", "fifth" ]

We can say the range of elements from index 1 to 3 is:

    [ "second", "third", "fourth" ]

Here are four common range-related methods:

    AddRange() — takes an array or list as an argument. Adds the values to the end of the list. Returns nothing.

    InsertRange() — takes an int and array or list as an argument. Adds the values at the int index. Returns nothing.

    RemoveRange() — takes two int values. The first int is the index at which to begin removing and the second int is the number of elements to remove. Returns nothing.

    GetRange() — takes two int values. The first int is the index of the first desired element and the second int is the number of elements in the desired range. Returns a list of the same type.

Here is each one in action:

    List<string> places = new List<string> { "first", "second" };

    places.AddRange(new string[] { "fifth", "sixth" });
    // List is "first", "second", "fifth", "sixth" ]
    places.InsertRange(2, new string[] { "third", "fourth"});
    // List is [ "first", "second", "third", "fourth", "fifth", "sixth" ]
    places.RemoveRange(4, 2);
    // List is [ "first", "second", "third", "fourth" ]
    List<string> newPlaces = places.GetRange(0, 3);
    // New list is [ "first", "second", "third" ]

You don’t need to memorize these methods, but you should be familiar with the concept of ranges! You can always look up the methods again in the Microsoft documentation.
