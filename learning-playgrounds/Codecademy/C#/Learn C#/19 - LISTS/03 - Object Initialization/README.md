# Object Initialization

Our first way to create lists and add items took multiple lines:

    List<string> citiesList = new List<string>();
    citiesList.Add("Delhi");
    citiesList.Add("Los Angeles");

We can do it all in one line using object initialization:

    List<string> citiesList2 = new List<string> { "Delhi", "Los Angeles" };

We won’t cover everything about object initialization in this lesson, but you do need to recognize and use it.

Basic construction uses parentheses ( ) and no values.
Object initialization uses curly braces { } and the actual values go in-between.
If we need to later add elements later to that second list, we can still use Add():

    citiesList2.Add("Kiev");
