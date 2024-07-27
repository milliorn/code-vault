using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
    class Program
    {
        static void Main()
        {
            List<string> heroes = new List<string> { "D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt" };

            //  Create a variable of type var named shortHeroes and set it equal to this LINQ query:
            var shortHeroes = from h in heroes where h.Length < 8 select h;

            //  Use a foreach loop to print out each element in shortHeroes.
            foreach (var item in shortHeroes)
            {
                Console.WriteLine(item);
            }

            //  Create another variable of type var named longHeroes and set it equal to this LINQ query:
            var longHeroes = heroes.Where(n => n.Length > 8);

            //  Use Count() to print the number of elements in longHeroes.
            Console.WriteLine(longHeroes.Count());
        }
    }
}
