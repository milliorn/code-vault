using System;

namespace LearnReferences
{
  class Program
  {
    static void Main(string[] args)
    {
      //Create a new Diary object with a current page of 5 using the constructor new Diary(5). Store a reference to that object and name it dy1. Its type should also be Diary.
      Diary dy1 = new Diary(5);
      
      //Create another reference to that object and name it dy2. 
      Diary dy2 = dy1;
      
      //Flip dy2 by calling its Flip() method. This increases the CurrentPage property by 1.
      dy2.Flip();
      
      //Print out the CurrentPage property for both dy1 and dy2. They should be the same!
      Console.WriteLine(dy1.CurrentPage);
      Console.WriteLine(dy2.CurrentPage);
    }
  }
}

