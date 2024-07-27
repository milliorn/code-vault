using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      Book b = new Book();      
      Diary d = new Diary(38);
      Random r = new Random();
      int i = 9;
      
      //Create an array of type Object[] that contains b, d, r, and i.
      Object[] a = {b, d, r, i};
      
      //Make an empty foreach loop that loops through each element in the array.
      //In the body of the loop, call the GetType() method of each element and print out the result.
      foreach(Object o in a)
      {
        Console.WriteLine(o.GetType());
      }
    }
  }
}