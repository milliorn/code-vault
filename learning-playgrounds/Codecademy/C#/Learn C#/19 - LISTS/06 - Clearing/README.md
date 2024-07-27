# Clearing

If we need to remove all of the elements from a list, we could iterate through the entire list and call Remove(). The easier way is to use the Clear() method.

    List<string> citiesList = new List<string> { "Delhi", "Los Angeles", "Kiev" };
    citiesList.Clear();

    Console.WriteLine(citiesList.Count);
    // Output: 0
