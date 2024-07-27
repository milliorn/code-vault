ALTERNATE EXPRESSIONS
Review
Well done! We learned two shortcuts for defining methods:

Expression-bodied definitions can be used for one-line method bodies.

bool isEven(int num) => num % 2 == 0;
Lambda expressions can be used to create an anonymous method:

bool hasEvenNumbers = Array.Exists(numbers, (int num) => num % 2 == 0 );
You learned two “sub-shortcuts” within lambda expressions:

You can remove the parameter type if it can be inferred:

bool hasEvenNumbers = Array.Exists(numbers, (num) => num % 2 == 0 );
You can remove the parentheses if there is one parameter:

bool hasEvenNumbers = Array.Exists(numbers, num => num % 2 == 0 );
