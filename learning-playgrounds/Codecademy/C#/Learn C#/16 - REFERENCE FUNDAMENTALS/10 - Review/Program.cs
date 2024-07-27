using System;

namespace LearnReferences
{
  class Program
  {
    static void Main(string[] args)
    {
      // Two references to the same object
      Dissertation diss1 = new Dissertation();
      Dissertation diss2 = diss1;
      diss1.CurrentPage = 31;
      diss1.Flip();
      Console.WriteLine(diss1.CurrentPage);
      Console.WriteLine(diss2.CurrentPage);
      // Both print 32

      // Referential equality when comparing reference types
      Dissertation d1 = new Dissertation(50);
      Dissertation d2 = new Dissertation(50);
      Console.WriteLine(d1 == d2);
      // Prints false

      // Value equality when comparing value types
      int int1 = 6;
      int int2 = 6;
      Console.WriteLine(int1 == int2);
      // Prints true

      // Reference to object with implemented interface
      Dissertation diss = new Dissertation(50);
      IFlippable f = diss;
      diss.Flip();
      f.Flip();
      Console.WriteLine(diss.Define());
      // This causes an error!
      // Console.WriteLine(f.Define());

      // Reference to object with inherited superclass
      Dissertation diss3 = new Dissertation(19, "Lajos Kossuth", "Shiny Happy People");
      Book bdiss3 = diss3;
      Console.WriteLine(diss3.Author);
      Console.WriteLine(bdiss3.Author);
      Console.WriteLine(diss3.Define());
      // This causes an error!
      // bdiss3.Define();

      // Arrays of references
      IFlippable[] flippers = new IFlippable[] {new Dissertation(), new Diary()};
      foreach (IFlippable flipper in flippers)
      {
        flipper.Flip();
      }
      
      // Same reference type but different behavior (using virtual/override)
      Book bdiss = new Dissertation();
      Book bk = new Book();
      Console.WriteLine(bdiss.Stringify());
      Console.WriteLine(bk.Stringify());
      // Output:
      // "This is a Dissertation object!"
      // "This is a Book object!"
      
      // Null reference
      Diary dy = null;
      // Unassigned reference
      Diary dy2;
      // Unassigned references in array
      Diary[] dys = new Diary[5];
    }
  }
}

