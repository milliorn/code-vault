STRING, THE EXCEPTION
String as Class
We can prove that String is a class by looking up the String class documentation and trying some of the methods and properties listed there.

This example uses Length and Contains().

string s = "Hello World";
Console.WriteLine(s.Length);
Console.WriteLine(s.Contains("o"));
We’ve already seen one static property Empty and one static method, IsNullOrEmpty():

string s = String.Empty;
bool isEmpty = String.IsNullOrEmpty(s);
