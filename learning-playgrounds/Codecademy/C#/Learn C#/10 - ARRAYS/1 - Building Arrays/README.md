ARRAYS
Building Arrays
In C#, arrays are a collection of values that all share the same data type. You could have an array of type string that contains a list of your favorite songs, or an array of type int that stores a collection of user ids.

Similar to defining a variable for one piece of data, when we define a variable to hold an array we also have to specify the type:

// These arrays store ints, strings, and doubles, respectively
int[] x; 
string[] s; 
double[] d; 
To declare a variable that holds an array, we first write the type of data that will be stored in an array, then add the square brackets [] to signify that it is holding an array (rather than a single value), followed by the name of the array.

Like a variable, we can define and initialize an array at the same time, by specifying the values we want to store in it:

int[] plantHeights = { 3, 4, 6 };
To declare and initialize an array at the same time, after the array declaration we use the equal sign to denote we’re storing a value to the array, then write out the numbers we’re putting in the array, separated by commas , and enclosed in curly braces {}.

You may also see arrays defined and initialized using a new keyword:

int[] plantHeights = new int[] { 3, 4, 6 };
The new keyword signifies that we are instantiating a new array from the array class. We’ll cover classes and instantiation in another lesson, but for now you can just think of it as another way to create an array.

In fact, if you decide to define an array and then initialize it later (rather in one line like above) you must use the new keyword:

// Initial declaration
int[] plantHeights;

// This works
plantHeights = new int[] { 3, 4, 6 };

// This will cause an error
// plantHeights = { 3, 4, 6 }; 
