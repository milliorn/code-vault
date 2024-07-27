string name = "Alice";
int age = 25;
Console.WriteLine($"My name is {name} and I'm {age} years old.");

int x = 5;
int y = 3;
int result = x + y;
Console.WriteLine(result);

x = 10;
y = 3;
result = x % y;
Console.WriteLine(result);

x = 5;
if (x > 0)
{
  Console.WriteLine("Positive");
}
else if (x < 0)
{
  Console.WriteLine("Negative");
}
else
{
  Console.WriteLine("Zero");
}

int dayOfWeek = 3;
string dayName;

switch (dayOfWeek)
{
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  default:
    dayName = "Unknown";
    break;
}

Console.WriteLine(dayName);

for (int i = 1; i < 5; i++)
{
  Console.WriteLine(i);
}

y = 5;
void PrintValue()
{
  int y = 10;
  Console.WriteLine(y);
}
PrintValue();