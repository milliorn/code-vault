METHOD OUTPUT
Using Out
We can use out parameters in our own methods as well. In this example, Yell() converts phrase to uppercase and sets a boolean variable to true:

static string Yell(string phrase, out bool wasYellCalled)
{
  wasYellCalled = true;
  return phrase.ToUpper();
}

The out parameter must have the out keyword and its expected type
The out parameter must be set to a value before the method ends
When calling the method, don’t forget to use the out keyword as well:

string message = "garrrr";
Yell(message, out bool flag);
// returns "GARRRR" and flag is true
