STRING, THE EXCEPTION
Strings can be Null or Empty or Unassigned
Like other reference types, string references can be null or unassigned. They can also have a third value: empty.

// Unassigned
string s;
// Null
string s2 = null;
// Empty string
string s3 = "";
// Also empty string
string s4 = String.Empty;
// This prints true
Console.WriteLine(s3 == s4);
All of these signify a lack of text, but they each mean something slightly different:

unassigned means that the programmer did not give the variable any value
null means that the programmer intentionally made the variable refer to no object
an empty string signifies a piece of text with zero characters. This is often used to represent a blank text field. It can be represented by "" or String.Empty
The Microsoft Programming Guide suggests using String.Empty or "" instead of null to avoid NullReferenceException errors.

We can check for null OR empty strings using the static String method IsNullOrEmpty(). It’s explained in more detail in the documentation.
