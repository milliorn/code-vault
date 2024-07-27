STATIC MEMBERS
Static Classes
We covered a few static members: field, property, method, and constructor. What if we made the whole class static?

static class Forest {}
A static class cannot be instantiated, so you only want to do this if you are making a utility or library, like Math or Console.

These two common classes are static because they are just tools — they don’t need specific instances and they don’t store new information.

Now when you see something like:

Math.Min(34, 54);
Console.WriteLine("yeehaw!");
You know that these are two static classes calling two static methods.
