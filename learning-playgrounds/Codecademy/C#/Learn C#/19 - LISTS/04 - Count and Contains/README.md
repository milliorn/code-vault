# Count and Contains

We can check on the status of our list in two ways.

We can find the number of elements in the list using the Count property:

    List<string> citiesList = new List<string> { "Delhi", "Los Angeles" };
    int numberCities = citiesList.Count;
    // numberCities is 2

We can check if an element exists in a list using the Contains() method:

    bool hasDelhi = citiesList.Contains("Delhi");
    bool hasDubai = citiesList.Contains("Dubai");
    // hasDelhi is true, hasDubai is false
