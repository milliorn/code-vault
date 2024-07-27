using System;

class Program
{
  static void Main()
  {
    SayHello();
    PrintArray(new int[] { 1, 2, 3, 4, 5 });
    DisplayRandomNumbers();
    AdjustMedicineSchedule();
    ValidateIPv4Addresses();
    TellFortune();
    DisplayStudents(new string[] { "Rebecca", "Nadia", "Noor", "Jonte" });
    PrintCircleInfo(12);
    SetHealth(false);
    RSVPs();
    GenerateEmails();
    CalculateTotal();
    ReverseWords();
    CheckPalindromes();
    FindChange();
    PlayDiceGame();
    PlanSchoolVisits("School A");
    PlanSchoolVisits("School B", 3);
    PlanSchoolVisits("School C", 2);
  }

  static void SayHello()
  {
    Console.WriteLine("Hello World!");
  }

  static void PrintArray(int[] arr)
  {
    Console.WriteLine("Contents of Array:");
    foreach (int x in arr)
    {
      Console.Write($"{x} ");
    }
    Console.WriteLine();
  }

  static void DisplayRandomNumbers()
  {
    Console.WriteLine("Generating random numbers:");
    Random random = new();

    for (int i = 0; i < 5; i++)
    {
      Console.Write($"{random.Next(1, 100)} ");
    }

    Console.WriteLine();
  }

  static void AdjustMedicineSchedule()
  {
    int[] times = { 800, 1200, 1600, 2000 };
    int diff = 0;

    Console.WriteLine("Enter current GMT");
    int currentGMT = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Current Medicine Schedule:");
    DisplayTimes(times);

    Console.WriteLine("Enter new GMT");
    int newGMT = Convert.ToInt32(Console.ReadLine());

    if (Math.Abs(newGMT) > 12 || Math.Abs(currentGMT) > 12)
    {
      Console.WriteLine("Invalid GMT");
    }
    else if (newGMT <= 0 && currentGMT <= 0 || newGMT >= 0 && currentGMT >= 0)
    {
      diff = 100 * (Math.Abs(newGMT) - Math.Abs(currentGMT));
      AdjustTimes(times, diff);
    }
    else
    {
      diff = 100 * (Math.Abs(newGMT) + Math.Abs(currentGMT));
      AdjustTimes(times, diff);
    }

    Console.WriteLine("New Medicine Schedule:");
    DisplayTimes(times);
  }

  static void DisplayTimes(int[] times)
  {
    foreach (int val in times)
    {
      string time = val.ToString();
      int len = time.Length;

      if (len >= 3)
      {
        time = time.Insert(len - 2, ":");
      }
      else if (len == 2)
      {
        time = time.Insert(0, "0:");
      }
      else
      {
        time = time.Insert(0, "0:0");
      }

      Console.Write($"{time} ");
    }
    Console.WriteLine();
  }

  static void AdjustTimes(int[] times, int diff)
  {
    for (int i = 0; i < times.Length; i++)
    {
      times[i] = ((times[i] + diff)) % 2400;
    }
  }

  static void ValidateIPv4Addresses()
  {
    string[] ipv4Input = { "107.31.1.5", "255.0.0.255", "555..0.555", "255...255" };

    foreach (string ip in ipv4Input)
    {
      if (IsValidIPv4(ip))
      {
        Console.WriteLine($"{ip} is a valid IPv4 address");
      }
      else
      {
        Console.WriteLine($"{ip} is an invalid IPv4 address");
      }
    }
  }

  static bool IsValidIPv4(string ip)
  {
    string[] address = ip.Split(".", StringSplitOptions.RemoveEmptyEntries);

    if (address.Length != 4)
    {
      return false;
    }

    foreach (string number in address)
    {
      if (number.Length > 1 && number.StartsWith("0"))
      {
        return false;
      }

      if (!int.TryParse(number, out int num) || num < 0 || num > 255)
      {
        return false;
      }
    }

    return true;
  }

  static void TellFortune()
  {
    Random random = new();
    int luck = random.Next(100);

    string[] text = { "You have much to", "Today is a day to", "Whatever work you do", "This is an ideal time to" };
    string[] good = { "look forward to.", "try new things!", "is likely to succeed.", "accomplish your dreams!" };
    string[] bad = { "fear.", "avoid major decisions.", "may have unexpected outcomes.", "re-evaluate your life." };
    string[] neutral = { "appreciate.", "enjoy time with friends.", "should align with your values.", "get in tune with nature." };

    Console.WriteLine("A fortune teller whispers the following words:");
    string[] fortune = (luck > 75 ? good : (luck < 25 ? bad : neutral));

    for (int i = 0; i < 4; i++)
    {
      Console.Write($"{text[i]} {fortune[i]} ");
    }

    Console.WriteLine();
  }

  static void DisplayStudents(string[] students)
  {
    Console.Write("Students: ");
    foreach (string student in students)
    {
      Console.Write($"{student}, ");
    }
    Console.WriteLine();
  }

  static void PrintCircleInfo(double radius)
  {
    double circumference = 2 * Math.PI * radius;
    double area = Math.PI * radius * radius;

    Console.WriteLine($"Circle with radius {radius}");
    Console.WriteLine($"Circumference: {circumference}");
    Console.WriteLine($"Area: {area}");
  }

  static void SetHealth(bool healthy)
  {
    Console.WriteLine(healthy ? "You are healthy." : "You are not healthy.");
  }

  static void RSVPs()
  {
    Console.WriteLine("Will you attend the event? (Yes/No)");
    string? response = Console.ReadLine();

    if (response!.Equals("Yes", StringComparison.OrdinalIgnoreCase))
    {
      Console.WriteLine("Great! We'll see you there.");
    }
    else if (response.Equals("No", StringComparison.OrdinalIgnoreCase))
    {
      Console.WriteLine("Sorry to hear that. Maybe next time.");
    }
    else
    {
      Console.WriteLine("Invalid response. Please enter 'Yes' or 'No'.");
    }
  }

  static void GenerateEmails()
  {
    string[,] corporate =
    {
            {"Robert", "Bavin"}, {"Simon", "Bright"},
            {"Kim", "Sinclair"}, {"Aashrita", "Kamath"},
            {"Sarah", "Delucchi"}, {"Sinan", "Ali"}
        };

    string[,] external =
    {
            {"Vinnie", "Ashton"}, {"Cody", "Dysart"},
            {"Shay", "Lawrence"}, {"Daren", "Valdes"}
        };

    string externalDomain = "hayworth.com";

    Console.WriteLine("Corporate Emails:");
    DisplayEmails(corporate);

    Console.WriteLine("\nExternal Emails:");
    DisplayEmails(external, externalDomain);
  }

  static void DisplayEmails(string[,] names, string domain = "contoso.com")
  {
    for (int i = 0; i < names.GetLength(0); i++)
    {
      string email = $"{names[i, 0].Substring(0, 2)}{names[i, 1]}".ToLower();
      Console.WriteLine($"{email}@{domain}");
    }
  }

  static void CalculateTotal()
  {
    double total = 0;
    double minimumSpend = 30.00;

    double[] items = { 15.97, 3.50, 12.25, 22.99, 10.98 };
    double[] discounts = { 0.30, 0.00, 0.10, 0.20, 0.50 };

    for (int i = 0; i < items.Length; i++)
    {
      total += GetDiscountedPrice(items[i], discounts[i]);
    }

    total -= TotalMeetsMinimum(total, minimumSpend) ? 5.00 : 0.00;

    Console.WriteLine($"Total: ${FormatDecimal(total)}");
  }

  static double GetDiscountedPrice(double item, double discount)
  {
    return item * (1 - discount);
  }

  static bool TotalMeetsMinimum(double total, double minimumSpend)
  {
    return total >= minimumSpend;
  }

  static string FormatDecimal(double input)
  {
    return input.ToString("F2"); // Formats the decimal with 2 decimal places.
  }

  static void ReverseWords()
  {
    string input = "there are snakes at the zoo";

    Console.WriteLine(input);
    Console.WriteLine(ReverseSentence(input));
  }

  static string ReverseSentence(string input)
  {
    string result = "";
    string[] words = input.Split(" ");
    foreach (string word in words)
    {
      result += ReverseWord(word) + " ";
    }
    return result.Trim();
  }

  static string ReverseWord(string word)
  {
    char[] charArray = word.ToCharArray();
    Array.Reverse(charArray);
    return new string(charArray);
  }

  static void CheckPalindromes()
  {
    string[] words = { "racecar", "talented", "deified", "tent", "tenet" };

    Console.WriteLine("Is it a palindrome?");
    foreach (string word in words)
    {
      Console.WriteLine($"{word}: {IsPalindrome(word)}");
    }
  }

  static bool IsPalindrome(string word)
  {
    int start = 0;
    int end = word.Length - 1;

    while (start < end)
    {
      if (word[start] != word[end])
      {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }

  static void FindChange()
  {
    int target = 30;
    int[] coins = new int[] { 5, 5, 50, 25, 25, 10, 5 };
    int[,] result = TwoCoins(coins, target);

    if (result.Length == 0)
    {
      Console.WriteLine("No two coins make change");
    }
    else
    {
      Console.WriteLine("Change found at positions:");
      for (int i = 0; i < result.GetLength(0); i++)
      {
        if (result[i, 0] == -1)
        {
          break;
        }
        Console.WriteLine($"{result[i, 0]},{result[i, 1]}");
      }
    }
  }

  static int[,] TwoCoins(int[] coins, int target)
  {
    int[,] result = { { -1, -1 }, { -1, -1 }, { -1, -1 }, { -1, -1 }, { -1, -1 } };
    int count = 0;

    for (int curr = 0; curr < coins.Length; curr++)
    {
      for (int next = curr + 1; next < coins.Length; next++)
      {
        if (coins[curr] + coins[next] == target)
        {
          result[count, 0] = curr;
          result[count, 1] = next;
          count++;
        }
        if (count == result.GetLength(0))
        {
          return result;
        }
      }
    }
    return (count == 0) ? new int[0, 0] : result;
  }

  static void PlayDiceGame()
  {
    Random random = new();

    Console.WriteLine("Would you like to play? (Y/N)");
    if (ShouldPlay())
    {
      PlayGame(random);
    }
  }

  static bool ShouldPlay()
  {
    string? response = Console.ReadLine();
    return response!.ToLower() == "y";
  }

  static void PlayGame(Random random)
  {
    bool play = true;

    while (play)
    {
      int target = GetTarget(random);
      int roll = RollDice(random);

      Console.WriteLine($"Roll a number greater than {target} to win!");
      Console.WriteLine($"You rolled a {roll}");
      Console.WriteLine(WinOrLose(roll, target));
      Console.WriteLine("\nPlay again? (Y/N)");

      play = ShouldPlay();
    }
  }

  static int GetTarget(Random random)
  {
    return random.Next(1, 6);
  }

  static int RollDice(Random random)
  {
    return random.Next(1, 7);
  }

  static string WinOrLose(int roll, int target)
  {
    if (roll > target)
    {
      return "You win!";
    }
    return "You lose!";
  }

  static void PlanSchoolVisits(string schoolName, int groups = 6)
  {
    string[] pettingZoo =
    {
            "alpacas", "capybaras", "chickens", "ducks", "emus", "geese",
            "goats", "iguanas", "kangaroos", "lemurs", "llamas", "macaws",
            "ostriches", "pigs", "ponies", "rabbits", "sheep", "tortoises",
        };

    RandomizeAnimals(pettingZoo);
    PlanSchoolVisit(schoolName, groups);
  }

  static void RandomizeAnimals(string[] animals)
  {
    Random random = new();

    for (int i = 0; i < animals.Length; i++)
    {
      int r = random.Next(i, animals.Length);

      (animals[i], animals[r]) = (animals[r], animals[i]);
    }
  }

  static void PlanSchoolVisit(string schoolName, int groups = 6)
  {
    string[] pettingZoo =
    {
            "alpacas", "capybaras", "chickens", "ducks", "emus", "geese",
            "goats", "iguanas", "kangaroos", "lemurs", "llamas", "macaws",
            "ostriches", "pigs", "ponies", "rabbits", "sheep", "tortoises",
        };

    int animalsPerGroup = pettingZoo.Length / groups;
    int remainder = pettingZoo.Length % groups;

    Console.WriteLine($"Visit {schoolName} with {groups} groups:");

    for (int i = 0; i < groups; i++)
    {
      int groupSize = animalsPerGroup + (i < remainder ? 1 : 0);

      Console.WriteLine($"Group {i + 1}:");
      for (int j = 0; j < groupSize; j++)
      {
        Console.WriteLine($"- {pettingZoo[i * animalsPerGroup + j]}");
      }

      Console.WriteLine();
    }
  }
}
