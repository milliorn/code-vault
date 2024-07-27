STRING, THE EXCEPTION
Re-introduction to Strings
Previous lessons have stated that all classes are reference types and all “primitive” values are value types.

// Reference type
Object o = new Object();
// Value type
bool b = true;
Do we consider string a reference type or a value type?

Spoiler! Strings are technically reference types. But in action, it’s a bit more complicated. Nearly every C# program uses some strings, so you’ll need to know how it works. This lesson will explain the unique behavior of string references.

By the way: in C#, String and string are equivalent. This just gives us more options when we are coding. It’s convenient for beginners because they usually see string introduced with other primitive value types like int and bool.
