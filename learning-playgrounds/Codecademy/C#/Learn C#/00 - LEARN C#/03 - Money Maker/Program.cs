using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
      //Message user
      Console.WriteLine("Welcome to Money Maker!");
      
      //Ask the user or the amount to convert.
      Console.WriteLine("Enter an amount to convert to coins:");
      
      //Capture the value in a variable
      string sAmount = Console.ReadLine();
      
      //Convert to Double
      double dAmount = Convert.ToDouble(sAmount);
      
      //Send message to user
      Console.WriteLine($"{dAmount} cents is equal to...");
      
      //Coin Value
      int goldValue = 10;
      int silverValue = 5;
      
      //Find the maximum number of gold coins that “fit” into the amount
      double goldCoins = Math.Floor(dAmount / goldValue);
      
      //Use the modulo (%) operator to find the remaining amount
      double leftOver = goldCoins % goldValue;
      
      //Find the maximum number of silver coins
      double silverCoins = Math.Floor(leftOver / silverValue);
      
      //Use the modulo (%) operator to find the remaining amount
      leftOver = leftOver % silverValue;
      
      //Print out all of the coins
      Console.WriteLine($"Gold coins: {goldCoins}");
      Console.WriteLine($"Silver coins: {silverCoins}");
      Console.WriteLine($"Bronze coins: {leftOver}");
    }
  }
}


