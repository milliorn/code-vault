METHOD OUTPUT
Out
A method can only return one value, but sometimes you need to output two pieces of information.

For example the Int32.TryParse() method tries to parse its input as an integer. If it can, it returns true and sets a specific variable to the new value. If it cannot it returns false and sets a specific variable to null. This is what the method’s signature looks like:

public static bool TryParse (string s, out int result);
The method returns a boolean and accepts a string and int variable as input.

Here’s how Int32.TryParse() and the out parameter are used:

int number;
bool success = Int32.TryParse("10602", out number); 
// number is 10602 and success is true
int number2;
bool success2 = Int32.TryParse(" !!! ", out number2);
// number2 is null and success2 is false
The second parameter is labeled out, which means that it must be assigned a value within the method.

For a shortcut, you can declare the int variable within the method call:

bool success = Int32.TryParse("10602", out int number);
