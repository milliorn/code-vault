internal class Program
{
  private static void Main(string[] args)
  {
    Console.WriteLine("Hello, World!");

    Random dice = new();
    int roll = dice.Next(1, 7);
    Console.WriteLine(roll);

    int result = dice.Next();
    Console.WriteLine(dice.Next(1, 7));

    int number = 7;
    string text = "seven";

    Console.WriteLine(number);
    Console.WriteLine();
    Console.WriteLine(text);

    int roll1 = dice.Next();
    int roll2 = dice.Next(101);
    int roll3 = dice.Next(50, 101);

    Console.WriteLine($"First roll: {roll1}");
    Console.WriteLine($"Second roll: {roll2}");
    Console.WriteLine($"Third roll: {roll3}");

    int firstValue = 500;
    int secondValue = 600;
    int largerValue = Math.Max(firstValue, secondValue);
    Console.WriteLine(largerValue);

    int total = roll1 + roll2 + roll3;

    Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

    if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3))
    {
      if ((roll1 == roll2) && (roll2 == roll3))
      {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6;
      }
      else
      {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
      }
    }

    if (total >= 16)
    {
      Console.WriteLine("You win a new car!");
    }
    else if (total >= 10)
    {
      Console.WriteLine("You win a new laptop!");
    }
    else if (total == 7)
    {
      Console.WriteLine("You win a trip for two!");
    }
    else
    {
      Console.WriteLine("You win a kitten!");
    }

    Random random = new();
    int daysUntilExpiration = random.Next(12);
    int discountPercentage = 0;

    if (daysUntilExpiration == 0)
    {
      Console.WriteLine("Your subscription has expired.");
    }
    else if (daysUntilExpiration == 1)
    {
      Console.WriteLine("Your subscription expires within a day!");
      discountPercentage = 20;
    }
    else if (daysUntilExpiration <= 5)
    {
      Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days.");
      discountPercentage = 10;
    }
    else if (daysUntilExpiration <= 10)
    {
      Console.WriteLine("Your subscription will expire soon. Renew now!");
    }

    if (discountPercentage > 0)
    {
      Console.WriteLine($"Renew now and save {discountPercentage}%.");
    }

    string[] fraudulentOrderIDs = new string[3];

    fraudulentOrderIDs[0] = "A123";
    fraudulentOrderIDs[1] = "B456";
    fraudulentOrderIDs[2] = "C789";

    Console.WriteLine($"First: {fraudulentOrderIDs[0]}");
    Console.WriteLine($"Second: {fraudulentOrderIDs[1]}");
    Console.WriteLine($"Third: {fraudulentOrderIDs[2]}");

    fraudulentOrderIDs[0] = "F000";

    Console.WriteLine($"Reassign First: {fraudulentOrderIDs[0]}");

    Console.WriteLine($"There are {fraudulentOrderIDs.Length} fraudulent orders to process.");

    int[] inventory = { 200, 450, 700, 175, 250 };
    int sum = 0;
    int bin = 0;

    foreach (int items in inventory)
    {
      sum += items;
      bin++;
      Console.WriteLine($"Bin {bin} = {items} items (Running total: {sum})");
    }

    Console.WriteLine($"We have {sum} items in inventory.");

    string[] orderIDs = { "B123", "C234", "A345", "C15", "B177", "G3003", "C235", "B179" };

    foreach (string orderID in orderIDs)
    {
      if (orderID.StartsWith("B"))
      {
        Console.WriteLine(orderID);
      }
    }

    /*
  The following code creates five random OrderIDs
  to test the fraud detection process.  OrderIDs 
  consist of a letter from A to E, and a three
  digit number. Ex. A123.
*/

    for (int i = 0; i < orderIDs.Length; i++)
    {
      int prefixValue = random.Next(65, 70);
      string prefix = Convert.ToChar(prefixValue).ToString();
      string suffix = random.Next(1, 1000).ToString("000");

      orderIDs[i] = prefix + suffix;
    }

    foreach (var orderID in orderIDs)
    {
      Console.WriteLine(orderID);
    }

    total = roll1 + roll2 + roll3;
    Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

    if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3))
    {
      if ((roll1 == roll2) && (roll2 == roll3))
      {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6;
      }
      else
      {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
      }
    }

    string str = "The quick brown fox jumps over the lazy dog.";
    // convert the message into a char array
    char[] charMessage = str.ToCharArray();
    // Reverse the chars
    Array.Reverse(charMessage);
    int x = 0;
    // count the o's
    foreach (char i in charMessage) { if (i == 'o') { x++; } }
    // convert it back to a string
    string new_message = new String(charMessage);
    // print it out
    Console.WriteLine(new_message);
    Console.WriteLine($"'o' appears {x} times.");

    /*
   This code reverses a message, counts the number of times 
   a particular character appears, then prints the results
   to the console window.
 */

    string originalMessage = "The quick brown fox jumps over the lazy dog.";

    char[] message = originalMessage.ToCharArray();
    Array.Reverse(message);

    int letterCount = 0;

    foreach (char letter in message)
    {
      if (letter == 'o')
      {
        letterCount++;
      }
    }

    string newMessage = new String(message);

    Console.WriteLine(newMessage);
    Console.WriteLine($"'o' appears {letterCount} times.");
  }
}