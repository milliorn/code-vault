Console.WriteLine("a" == "a");
Console.WriteLine("a" == "A");
Console.WriteLine(1 == 2);

string myValue = "a";
Console.WriteLine(myValue == "a");
Console.WriteLine("a" == "a ");

string value1 = " a";
string value2 = "A ";
Console.WriteLine(value1.Trim().ToLower() == value2.Trim().ToLower());

Console.WriteLine("a" != "a");
Console.WriteLine("a" != "A");
Console.WriteLine(1 != 2);

myValue = "a";
Console.WriteLine(myValue != "a");

Console.WriteLine(1 > 2);
Console.WriteLine(1 < 2);
Console.WriteLine(1 >= 1);
Console.WriteLine(1 <= 1);

string pangram = "The quick brown fox jumps over the lazy dog.";
Console.WriteLine(pangram.Contains("fox"));
Console.WriteLine(pangram.Contains("cow"));

// These two lines of code will create the same output

Console.WriteLine(pangram.Contains("fox") == false);
Console.WriteLine(!pangram.Contains("fox"));

Console.WriteLine(!pangram.Contains("fox"));
Console.WriteLine(!pangram.Contains("cow"));

int saleAmount = 1001;
// int discount = saleAmount > 1000 ? 100 : 50;

Console.WriteLine($"Discount: {(saleAmount > 1000 ? 100 : 50)}");

Random coin = new();
int flip = coin.Next(0, 2);
Console.WriteLine((flip == 0) ? "heads" : "tails");

string permission = "Admin|Manager";
int level = 53;

if (permission.Contains("Admin"))
{
  if (level > 55)
  {
    Console.WriteLine("Welcome, Super Admin user.");
  }
  else
  {
    Console.WriteLine("Welcome, Admin user.");
  }
}
else if (permission.Contains("Manager"))
{
  if (level >= 20)
  {
    Console.WriteLine("Contact an Admin for access.");
  }
  else
  {
    Console.WriteLine("You do not have sufficient privileges.");
  }
}
else
{
  Console.WriteLine("You do not have sufficient privileges.");
}

bool flag = true;
int value = 0;

if (flag)
{
  value = 10;
  Console.WriteLine("Inside of code block: " + value);
}
Console.WriteLine("Outside of code block: " + value);

string name = "steve";

if (name == "bob")
  Console.WriteLine("Found Bob");
else if (name == "steve")
  Console.WriteLine("Found Steve");
else
  Console.WriteLine("Found Chuck");

int[] numbers = { 4, 8, 15, 16, 23, 42 };
int total = 0;
bool found = false;

foreach (int number in numbers)
{
  total += number;
  if (number == 42)
    found = true;
}

if (found)
  Console.WriteLine("Set contains 42");

Console.WriteLine($"Total: {total}");

int employeeLevel = 100;
string employeeName = "John Smith";

string title = "";

switch (employeeLevel)
{
  case 100:
  case 200:
    title = "Senior Associate";
    break;
  case 300:
    title = "Manager";
    break;
  case 400:
    title = "Senior Manager";
    break;
  default:
    title = "Associate";
    break;
}

Console.WriteLine($"{employeeName}, {title}");

// SKU = Stock Keeping Unit
string sku = "01-MN-L";

string[] product = sku.Split('-');

string type = "";
string color = "";
string size = "";

type = product[0] switch
{
  "01" => "Sweat shirt",
  "02" => "T-Shirt",
  "03" => "Sweat pants",
  _ => "Other",
};

color = product[1] switch
{
  "BL" => "Black",
  "MN" => "Maroon",
  _ => "White",
};

size = product[2] switch
{
  "S" => "Small",
  "M" => "Medium",
  "L" => "Large",
  _ => "One Size Fits All",
};

Console.WriteLine($"Product: {size} {color} {type}");

for (int i = 0; i < 10; i++)
{
  Console.WriteLine(i);
}

for (int i = 10; i >= 0; i--)
{
  Console.WriteLine(i);
}

for (int i = 0; i < 10; i += 3)
{
  Console.WriteLine(i);
}

for (int i = 0; i < 10; i++)
{
  Console.WriteLine(i);
  if (i == 7) break;
}

string[] names = { "Alex", "Eddie", "David", "Michael" };
for (int i = names.Length - 1; i >= 0; i--)
{
  Console.WriteLine(names[i]);
}

for (int i = 0; i < names.Length; i++)
{
  if (names[i] == "David") names[i] = "Sammy";
}

for (int i = 1; i < 101; i++)
{
  if ((i % 3 == 0) && (i % 5 == 0))
    Console.WriteLine($"{i} - FizzBuzz");
  else if (i % 3 == 0)
    Console.WriteLine($"{i} - Fizz");
  else if (i % 5 == 0)
    Console.WriteLine($"{i} - Buzz");
  else
    Console.WriteLine($"{i}");
}

Random random = new();
int current = random.Next(1, 11);

do
{
  current = random.Next(1, 11);

  if (current >= 8) continue;

  Console.WriteLine(current);
} while (current != 7);

int hero = 10;
int monster = 10;

Random dice = new();

do
{
  int roll = dice.Next(1, 11);
  monster -= roll;
  Console.WriteLine($"Monster was damaged and lost {roll} health and now has {monster} health.");

  if (monster <= 0) continue;

  roll = dice.Next(1, 11);
  hero -= roll;
  Console.WriteLine($"Hero was damaged and lost {roll} health and now has {hero} health.");

} while (hero > 0 && monster > 0);

Console.WriteLine(hero > monster ? "Hero wins!" : "Monster wins!");

string? readResult;
string valueEntered = "";
int numValue = 0;
bool validNumber = false;

Console.WriteLine("Enter an integer value between 5 and 10");

do
{
  readResult = Console.ReadLine();
  if (readResult != null)
  {
    valueEntered = readResult;
  }

  validNumber = int.TryParse(valueEntered, out numValue);

  if (validNumber == true)
  {
    if (numValue <= 5 || numValue >= 10)
    {
      validNumber = false;
      Console.WriteLine($"You entered {numValue}. Please enter a number between 5 and 10.");
    }
  }
  else
  {
    Console.WriteLine("Sorry, you entered an invalid number, please try again");
  }
} while (validNumber == false);

Console.WriteLine($"Your input value ({numValue}) has been accepted.");

readResult = Console.ReadLine();

string roleName = "";
bool validEntry = false;

do
{
  Console.WriteLine("Enter your role name (Administrator, Manager, or User)");
  readResult = Console.ReadLine();
  if (readResult != null)
  {
    roleName = readResult.Trim();
  }

  if (roleName.ToLower() == "administrator" || roleName.ToLower() == "manager" || roleName.ToLower() == "user")
  {
    validEntry = true;
  }
  else
  {
    Console.Write($"The role name that you entered, \"{roleName}\" is not valid. ");
  }

} while (validEntry == false);

Console.WriteLine($"Your input value ({roleName}) has been accepted.");
readResult = Console.ReadLine();

string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };
int stringsCount = myStrings.Length;

string myString = "";
int periodLocation = 0;

for (int i = 0; i < stringsCount; i++)
{
  myString = myStrings[i];
  periodLocation = myString.IndexOf(".");

  string mySentence;

  // extract sentences from each string and display them one at a time
  while (periodLocation != -1)
  {

    // first sentence is the string value to the left of the period location
    mySentence = myString.Remove(periodLocation);

    // the remainder of myString is the string value to the right of the location
    myString = myString.Substring(periodLocation + 1);

    // remove any leading white-space from myString
    myString = myString.TrimStart();

    // update the comma location and increment the counter
    periodLocation = myString.IndexOf(".");

    Console.WriteLine(mySentence);
  }

  mySentence = myString.Trim();
  Console.WriteLine(mySentence);
}

string[][] jaggedArray = new string[][]
{
    new string[] { "one1", "two1", "three1", "four1", "five1", "six1" },
    new string[] { "one2", "two2", "three2", "four2", "five2", "six2" },
    new string[] { "one3", "two3", "three3", "four3", "five3", "six3" },
    new string[] { "one4", "two4", "three4", "four4", "five4", "six4" },
    new string[] { "one5", "two5", "three5", "four5", "five5", "six5" },
    new string[] { "one6", "two6", "three6", "four6", "five6", "six6" },
    new string[] { "one7", "two7", "three7", "four7", "five7", "six7" },
    new string[] { "one8", "two8", "three8", "four8", "five8", "six8" }
};

foreach (string[] array in jaggedArray)
{
  foreach (string v in array)
  {
    Console.WriteLine(v);
  }
  Console.WriteLine();
}

