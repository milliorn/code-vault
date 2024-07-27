Console.WriteLine("Signed integral types:");

Console.WriteLine($"sbyte  : {sbyte.MinValue} to {sbyte.MaxValue}");
Console.WriteLine($"short  : {short.MinValue} to {short.MaxValue}");
Console.WriteLine($"int    : {int.MinValue} to {int.MaxValue}");
Console.WriteLine($"long   : {long.MinValue} to {long.MaxValue}");

Console.WriteLine("");
Console.WriteLine("Unsigned integral types:");

Console.WriteLine($"byte   : {byte.MinValue} to {byte.MaxValue}");
Console.WriteLine($"ushort : {ushort.MinValue} to {ushort.MaxValue}");
Console.WriteLine($"uint   : {uint.MinValue} to {uint.MaxValue}");
Console.WriteLine($"ulong  : {ulong.MinValue} to {ulong.MaxValue}");

Console.WriteLine("");
Console.WriteLine("Floating point types:");
Console.WriteLine($"float  : {float.MinValue} to {float.MaxValue} (with ~6-9 digits of precision)");
Console.WriteLine($"double : {double.MinValue} to {double.MaxValue} (with ~15-17 digits of precision)");
Console.WriteLine($"decimal: {decimal.MinValue} to {decimal.MaxValue} (with 28-29 digits of precision)");

string[] values = { "12.3", "45", "ABC", "11", "DEF" };

decimal total = 0m;
string message = "";

foreach (var valu in values)
{
  decimal number; // stores the TryParse "out" value
  if (decimal.TryParse(valu, out number))
  {
    total += number;
  }
  else
  {
    message += valu;
  }
}

Console.WriteLine($"Message: {message}");
Console.WriteLine($"Total: {total}");

int value1 = 12;
decimal value2 = 6.2m;
float value3 = 4.3f;

// The Convert class is best for converting the fractional decimal numbers into whole integer numbers
// Convert.ToInt32() rounds up the way you would expect.
int result1 = Convert.ToInt32((decimal)value1 / value2);
Console.WriteLine($"Divide value1 by value2, display the result as an int: {result1}");

decimal result2 = value2 / (decimal)value3;
Console.WriteLine($"Divide value2 by value3, display the result as a decimal: {result2}");

float result3 = value3 / value1;
Console.WriteLine($"Divide value3 by value1, display the result as a float: {result3}");

string[] pallets = { "B14", "A11", "B12", "A13" };

Console.WriteLine("Sorted...");
Array.Sort(pallets);
foreach (var pallet in pallets)
{
  Console.WriteLine($"-- {pallet}");
}

Console.WriteLine("");
Console.WriteLine("Sorted...");
Array.Sort(pallets);
foreach (var pallet in pallets)
{
  Console.WriteLine($"-- {pallet}");
}

Console.WriteLine("");
Console.WriteLine("Reversed...");
Array.Reverse(pallets);
foreach (var pallet in pallets)
{
  Console.WriteLine($"-- {pallet}");
}

Console.WriteLine("");

Array.Clear(pallets, 0, 2);
Console.WriteLine($"Clearing 2 ... count: {pallets.Length}");
foreach (var pallet in pallets)
{
  Console.WriteLine($"-- {pallet}");
}

Console.WriteLine("");
Array.Resize(ref pallets, 6);
Console.WriteLine($"Resizing 6 ... count: {pallets.Length}");

pallets[4] = "C01";
pallets[5] = "C02";

foreach (var pallet in pallets)
{
  Console.WriteLine($"-- {pallet}");
}

Console.WriteLine("");
Array.Resize(ref pallets, 3);
Console.WriteLine($"Resizing 3 ... count: {pallets.Length}");

foreach (var pallet in pallets)
{
  Console.WriteLine($"-- {pallet}");
}

string value = "abc123";
char[] valueArray = value.ToCharArray();
Array.Reverse(valueArray);
// string result = new string(valueArray);
string result = String.Join(",", valueArray);
Console.WriteLine(result);

string[] items = result.Split(',');
foreach (string item in items)
{
  Console.WriteLine(item);
}

string pangram = "The quick brown fox jumps over the lazy dog";

// Step 1
string[] messageSplit = pangram.Split(' ');

//Step 2
string[] newMessage = new string[messageSplit.Length];

// Step 3
for (int i = 0; i < messageSplit.Length; i++)
{
  char[] letters = messageSplit[i].ToCharArray();
  Array.Reverse(letters);
  newMessage[i] = new string(letters);
}

//Step 4
string _ = String.Join(" ", newMessage);
Console.WriteLine(result);

string orderStream = "B123,C234,A345,C15,B177,G3003,C235,B179";
string[] _items = orderStream.Split(',');
Array.Sort(items);

foreach (var item in _items)
{
  if (item.Length == 4)
  {
    Console.WriteLine(item);
  }
  else
  {
    Console.WriteLine(item + "\t- Error");
  }
}

string first = "Hello";
string second = "World";
Console.WriteLine("{1} {0}!", first, second);
Console.WriteLine("{0} {0} {0}!", first, second);

decimal price = 123.45m;
int discount = 50;
Console.WriteLine($"Price: {price:C} (Save {discount:C})");

decimal measurement = 123456.78912m;
Console.WriteLine($"Measurement: {measurement:N} units");

decimal tax = .36785m;
Console.WriteLine($"Tax rate: {tax:P2}");

price = 67.55m;
decimal salePrice = 59.99m;

string yourDiscount = String.Format("You saved {0:C2} off the regular {1:C2} price. ", (price - salePrice), price);

Console.WriteLine(yourDiscount);

price = 67.55m;
salePrice = 59.99m;

yourDiscount = String.Format("You saved {0:C2} off the regular {1:C2} price. ", (price - salePrice), price);

yourDiscount += $"A discount of {((price - salePrice) / price):P2}!"; //inserted
Console.WriteLine(yourDiscount);

Console.WriteLine($"Tax rate: {.12051m:P1}");

int invoiceNumber = 1201;
decimal productShares = 25.4568m;
decimal subtotal = 2750.00m;
decimal taxPercentage = .15825m;
total = 3185.19m;

Console.WriteLine($"Invoice Number: {invoiceNumber}");
Console.WriteLine($"   Shares: {productShares:N3} Product");
Console.WriteLine($"     Sub Total: {subtotal:C}");
Console.WriteLine($"           Tax: {taxPercentage:P2}");
Console.WriteLine($"     Total Billed: {total:C}");

first = "Hello";
second = "World";
result = string.Format("{0} {1}!", first, second);
Console.WriteLine(result);

string input = "Pad this";
Console.WriteLine(input.PadLeft(12));

string paymentId = "769C";

var formattedLine = paymentId.PadRight(6);

Console.WriteLine(formattedLine);

paymentId = "769";
string payeeName = "Mr. Stephen Ortega";
string paymentAmount = "$5,000.00";

formattedLine = paymentId.PadRight(6);
formattedLine += payeeName.PadRight(24);
formattedLine += paymentAmount.PadLeft(10);

Console.WriteLine("1234567890123456789012345678901234567890");
Console.WriteLine(formattedLine);

string myWords = "Learning C#";
Console.WriteLine(myWords.PadLeft(12));

string customerName = "Ms. Barros";

string currentProduct = "Magic Yield";
int currentShares = 2975000;
decimal currentReturn = 0.1275m;
decimal currentProfit = 55000000.0m;

string newProduct = "Glorious Future";
decimal newReturn = 0.13125m;
decimal newProfit = 63000000.0m;

Console.WriteLine($"Dear {customerName},");
Console.WriteLine($"As a customer of our {currentProduct} offering we are excited to tell you about a new financial product that would dramatically increase your return.\n");
Console.WriteLine($"Currently, you own {currentShares:N} shares at a return of {currentReturn:P}.\n");
Console.WriteLine($"Our new product, {newProduct} offers a return of {newReturn:P}.  Given your current volume, your potential profit would be {newProfit:C}.\n");

Console.WriteLine("Here's a quick comparison:\n");

string comparisonMessage = "";

comparisonMessage = currentProduct.PadRight(20);
comparisonMessage += String.Format("{0:P}", currentReturn).PadRight(10);
comparisonMessage += String.Format("{0:C}", currentProfit).PadRight(20);

comparisonMessage += "\n";
comparisonMessage += newProduct.PadRight(20);
comparisonMessage += String.Format("{0:P}", newReturn).PadRight(10);
comparisonMessage += String.Format("{0:C}", newProfit).PadRight(20);

Console.WriteLine(comparisonMessage);

Console.WriteLine("C110".PadLeft(6, '0'));

message = "What is the value <span>between the tags</span>?";

const string openSpan = "<span>";
const string closeSpan = "</span>";

int openingPosition = message.IndexOf(openSpan);
int closingPosition = message.IndexOf(closeSpan);

openingPosition += openSpan.Length;
int length = closingPosition - openingPosition;
Console.WriteLine(message.Substring(openingPosition, length));

message = "(What if) I have [different symbols] but every {open symbol} needs a [matching closing symbol]?";

// The IndexOfAny() helper method requires a char array of characters. 
// You want to look for:

char[] openSymbols = { '[', '{', '(' };

// You'll use a slightly different technique for iterating through 
// the characters in the string. This time, use the closing 
// position of the previous iteration as the starting index for the 
//next open symbol. So, you need to initialize the closingPosition 
// variable to zero:

closingPosition = 0;

while (true)
{
  openingPosition = message.IndexOfAny(openSymbols, closingPosition);

  if (openingPosition == -1) break;

  string currentSymbol = message.Substring(openingPosition, 1);

  // Now  find the matching closing symbol
  char matchingSymbol = ' ';

  switch (currentSymbol)
  {
    case "[":
      matchingSymbol = ']';
      break;
    case "{":
      matchingSymbol = '}';
      break;
    case "(":
      matchingSymbol = ')';
      break;
  }

  // To find the closingPosition, use an overload of the IndexOf method to specify 
  // that the search for the matchingSymbol should start at the openingPosition in the string. 

  openingPosition += 1;
  closingPosition = message.IndexOf(matchingSymbol, openingPosition);

  // Finally, use the techniques you've already learned to display the sub-string:

  length = closingPosition - openingPosition;
  Console.WriteLine(message.Substring(openingPosition, length));
}

message = "Big Dog";
message = message.Replace("B", "D");
Console.WriteLine(message);

const string _input = "<div><h2>Widgets &trade;</h2><span>5000</span></div>";

string quantity = "";
string output = "";

// Your work here

// Extract the quantity
int quantityStart = _input.IndexOf("<span>");
int quantityEnd = _input.IndexOf("</span>");
quantityStart += "<span>".Length; // Added length of the tag so index moves to end of the tag
int quantityLength = quantityEnd - quantityStart;
quantity = _input.Substring(quantityStart, quantityLength); //Extracts from end of open tag to beginning of close tag
quantity = $"Quantity: {quantity}";

// Set output to input, replacing the trademark symbol with the registered trademark symbol
output = _input.Replace("&trade;", "&reg;");

// Remove the opening <div> tag
int divStart = _input.IndexOf("<div>");
int divLength = "<div>".Length;
output = output.Remove(divStart, divLength);

// Remove the closing <div> tag
int divCloseStart = output.IndexOf("</div>");
int divCloseLength = "</div>".Length;
output = output.Remove(divCloseStart, divCloseLength);
output = $"Output: {output}";

Console.WriteLine(quantity);
Console.WriteLine(output);