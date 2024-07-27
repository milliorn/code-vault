using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
    class Program
    {
        static void Main()
        {
            string[] heroes = { "D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt" };

            //  Write a method-syntax query that transforms each element in heroes to this format:
            var methodSyntax = heroes.Select(h => $"Introducing...{h}!");

            //  Write a query-syntax query that selects elements containing a space and
            //  returns the index of the space in each element.
            //  For example, instead of "D. Va", the result should contain 2.
            var querySyntax = from h in heroes where h.Contains(" ") select h.IndexOf(" ");

            //  Print out all of the elements of both query results to check your work.
            foreach (var item in methodSyntax)
            {
                Console.WriteLine(item);
            }

            foreach (var item in querySyntax)
            {
                Console.WriteLine(item);
            }
        }
    }
}
