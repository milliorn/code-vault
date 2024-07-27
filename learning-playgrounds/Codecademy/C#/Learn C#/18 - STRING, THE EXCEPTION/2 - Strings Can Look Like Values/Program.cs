using System;

namespace StringTheException
{
  class Program
  {
    static void Main(string[] args)
    {
      //Create two string variables with the same value: "immutable".
      string s1 = "immutable";
      string s2 = "immutable";
      
      //Compare the two variables using == and print the result.
      Console.WriteLine(s1 == s2);
      
      //Now repeat the process with two Object variables: Construct two new Object instances and store them in two new variables.  Compare them with ==. Make sure to call new Object() twice. Why are the results different?
      Object o1 = new Object();
      Object o2 = new Object();
      Console.WriteLine(o1 == o2);
    }
  }
}
