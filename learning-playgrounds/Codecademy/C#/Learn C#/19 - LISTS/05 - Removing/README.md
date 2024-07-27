# Removing

To remove a specific item from a list we use the Remove() method. It expects the specific item as an argument and it returns true if it was successfully removed. This code removes "Delhi" from the list and returns true:

    List<string> citiesList = new List<string> { "Delhi", "Los Angeles", "Kiev" };
    bool success = citiesList.Remove("Delhi");
    // success is true

If the specific item does NOT exist in the list, the method call returns false. Since "Dubai" isn’t in the list, success will be false:

    success = citiesList.Remove("Dubai");
    // success is false

If you remove an element in the middle of the list, all of the elements will be “shifted” down one index. In the first example, the list was originally:

    [ "Delhi", "Los Angeles", "Kiev" ]

After the call to Remove("Delhi"), the list becomes

    [ "Los Angeles", "Kiev" ]
