# Creating and Adding

A list is a sequential data structure that can hold any type. Like arrays, you can use them to store any sequential information, like the letters of the alphabet, comments on a blogpost, the finishing times for a horse race, or items on a restaurant menu.

You create a list using the new keyword, like you would create any other class. You specify the type of element inside angle brackets: < >. In this example, the list is named citiesList and it holds instances of the type string.

    List<string> citiesList = new List<string>();

You can add elements to the list using the Add() method:

    citiesList.Add("Delhi");

You can access elements using indices and square brackets:

    string city = citiesList[0];

You can also re-assign elements using bracket notation:

    citiesList[0] = "New Delhi";

In order to use lists, you’ll need to add this to the top of your file. We’ll explain this in detail later:

    using System.Collections.Generic;
