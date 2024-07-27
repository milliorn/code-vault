string? readResult;
int startIndex = 0;
bool goodEntry = false;

int[] numbers = { 1, 2, 3, 4, 5 };

// Display the array to the console.
Console.Clear();
Console.Write("\n\rThe 'numbers' array contains: { ");
foreach (int number in numbers)
{
  Console.Write($"{number} ");
}

// To calculate a sum of array elements, 
//  prompt the user for the starting element number.
Console.WriteLine($"}}\n\r\n\rTo sum values 'n' through 5, enter a value for 'n':");
while (goodEntry == false)
{
  readResult = Console.ReadLine();
  goodEntry = int.TryParse(readResult, out startIndex);

  if (startIndex > 5)
  {
    goodEntry = false;
    Console.WriteLine("\n\rEnter an integer value between 1 and 5");
  }
}

// Display the sum and then pause.
Console.WriteLine($"\n\rThe sum of numbers {startIndex} through {numbers.Length} is: {SumValues(numbers, startIndex)}");

Console.WriteLine("press Enter to exit");
readResult = Console.ReadLine();

// This method returns the sum of elements n through 5
static int SumValues(int[] numbers, int n)
{
  int sum = 0;
  for (int i = n; i < numbers.Length; i++)
  {
    sum += numbers[i];
  }
  return sum;
}

double float1 = 3000.0;
double float2 = 0.0;
int number1 = 3000;
int number2 = 0;

Console.WriteLine(float1 / float2);
Console.WriteLine(number1 / number2);
Console.WriteLine("Exit program");

try
{
  Process1();
}
catch
{
  Console.WriteLine("An exception has occurred");
}

Console.WriteLine("Exit program");

static void Process1()
{
  try
  {
    WriteMessage();
  }
  catch
  {
    Console.WriteLine("Exception caught in Process1");
  }
}

static void WriteMessage()
{
  double float1 = 3000.0;
  double float2 = 0.0;
  int number1 = 3000;
  int number2 = 0;

  Console.WriteLine(float1 / float2);
  Console.WriteLine(number1 / number2);
}

checked
{
  try
  {
    int num1 = int.MaxValue;
    int num2 = int.MaxValue;
    int result = num1 + num2;
    Console.WriteLine("Result: " + result);
  }
  catch (OverflowException ex)
  {
    Console.WriteLine("Error: The number is too large to be represented as an integer. " + ex.Message);
  }
}

try
{
  string? str = null;
  int length = str!.Length;
  Console.WriteLine("String Length: " + length);
}
catch (NullReferenceException ex)
{
  Console.WriteLine("Error: The reference is null. " + ex.Message);
}

try
{
  numbers[5] = 10;
  Console.WriteLine("Number at index 5: " + numbers[5]);
}
catch (IndexOutOfRangeException ex)
{
  Console.WriteLine("Error: Index out of range. " + ex.Message);
}

try
{
  int num3 = 10;
  int num4 = 0;
  int result2 = num3 / num4;
  Console.WriteLine("Result: " + result2);
}
catch (DivideByZeroException ex)
{
  Console.WriteLine("Error: Cannot divide by zero. " + ex.Message);
}

Console.WriteLine("Exiting program.");

try
{
  OperatingProcedure1();
}
catch (Exception ex)
{
  Console.WriteLine(ex.Message);
  Console.WriteLine("Exiting application.");
}

static void OperatingProcedure1()
{
  string[][] userEnteredValues = new string[][]
  {
        new string[] { "1", "two", "3"},
        new string[] { "0", "1", "2"}
  };

  foreach (string[] userEntries in userEnteredValues)
  {
    try
    {
      BusinessProcess1(userEntries);
    }
    catch (Exception ex)
    {
      if (ex.StackTrace!.Contains("BusinessProcess1"))
      {
        if (ex is FormatException)
        {
          Console.WriteLine(ex.Message);
          Console.WriteLine("Corrective action taken in OperatingProcedure1");
        }
        else if (ex is DivideByZeroException)
        {
          Console.WriteLine(ex.Message);
          Console.WriteLine("Partial correction in OperatingProcedure1 - further action required");

          // re-throw the original exception
          throw;
        }
        else
        {
          // create a new exception object that wraps the original exception
          throw new ApplicationException("An error occurred - ", ex);
        }
      }
    }

  }
}

static void BusinessProcess1(String[] userEntries)
{
  int valueEntered;

  foreach (string userValue in userEntries)
  {
    try
    {
      valueEntered = int.Parse(userValue);

      checked
      {
        int calculatedValue = 4 / valueEntered;
      }
    }
    catch (FormatException)
    {
      FormatException invalidFormatException = new FormatException("FormatException: User input values in 'BusinessProcess1' must be valid integers");
      throw invalidFormatException;
    }
    catch (DivideByZeroException)
    {
      DivideByZeroException unexpectedDivideByZeroException = new DivideByZeroException("DivideByZeroException: Calculation in 'BusinessProcess1' encountered an unexpected divide by zero");
      throw unexpectedDivideByZeroException;

    }
  }
}

// Prompt the user for the lower and upper bounds
Console.Write("Enter the lower bound: ");

Console.Write("Enter the upper bound: ");
int upperBound = int.Parse(Console.ReadLine());

decimal averageValue = 0;

int lowerBound = int.Parse(Console.ReadLine());
// Calculate the sum of the even numbers between the bounds
averageValue = AverageOfEvenNumbers(lowerBound, upperBound);

// Display the value returned by AverageOfEvenNumbers in the console
Console.WriteLine($"The average of even numbers between {lowerBound} and {upperBound} is {averageValue}.");

// Wait for user input
Console.ReadLine();

static decimal AverageOfEvenNumbers(int lowerBound, int upperBound)
{
  int sum = 0;
  int count = 0;
  decimal average = 0;

  for (int i = lowerBound; i <= upperBound; i++)
  {
    if (i % 2 == 0)
    {
      sum += i;
      count++;
    }
  }

  average = (decimal)sum / count;

  return average;
}

string[][] userEnteredValues = new string[][]
{
            new string[] { "1", "2", "3"},
            new string[] { "1", "two", "3"},
            new string[] { "0", "1", "2"}
};

string overallStatusMessage = "";

overallStatusMessage = Workflow1(userEnteredValues);

if (overallStatusMessage == "operating procedure complete")
{
  Console.WriteLine("'Workflow1' completed successfully.");
}
else
{
  Console.WriteLine("An error occurred during 'Workflow1'.");
  Console.WriteLine(overallStatusMessage);
}

static string Workflow1(string[][] userEnteredValues)
{
  string operationStatusMessage = "good";
  string processStatusMessage = "";

  foreach (string[] userEntries in userEnteredValues)
  {
    processStatusMessage = Process1(userEntries);

    if (processStatusMessage == "process complete")
    {
      Console.WriteLine("'Process1' completed successfully.");
      Console.WriteLine();
    }
    else
    {
      Console.WriteLine("'Process1' encountered an issue, process aborted.");
      Console.WriteLine(processStatusMessage);
      Console.WriteLine();
      operationStatusMessage = processStatusMessage;
    }
  }

  if (operationStatusMessage == "good")
  {
    operationStatusMessage = "operating procedure complete";
  }

  return operationStatusMessage;
}

static string Process1(String[] userEntries)
{
  string processStatus = "clean";
  string returnMessage = "";
  int valueEntered;

  foreach (string userValue in userEntries)
  {
    bool integerFormat = int.TryParse(userValue, out valueEntered);

    if (integerFormat == true)
    {
      if (valueEntered != 0)
      {
        checked
        {
          int calculatedValue = 4 / valueEntered;
        }
      }
      else
      {
        returnMessage = "Invalid data. User input values must be non-zero values.";
        processStatus = "error";
      }
    }
    else
    {
      returnMessage = "Invalid data. User input values must be valid integers.";
      processStatus = "error";
    }
  }

  if (processStatus == "clean")
  {
    returnMessage = "process complete";
  }

  return returnMessage;
}