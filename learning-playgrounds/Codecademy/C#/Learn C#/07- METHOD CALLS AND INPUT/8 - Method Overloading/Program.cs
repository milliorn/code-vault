using System;

namespace MethodOverloading
{
  class Program
  {
    static void Main(string[] args)
    {
	  NamePets("A", "B");
      NamePets("A", "B", "C");
      NamePets();
    }
    
    static void NamePets(string s1, string s2)
    {
      Console.WriteLine($"Your pets {s1} and {s2} will be joining your voyage across space!");
    }
    static void NamePets(string s1, string s2, string s3)
    {
      Console.WriteLine($"Your pets {s1}, {s2}, and {s3} will be joining your voyage across space!");
    }
    static void NamePets()
    {
      Console.WriteLine("Aw, you have no spacefaring pets :(");
    }    
  }
}

