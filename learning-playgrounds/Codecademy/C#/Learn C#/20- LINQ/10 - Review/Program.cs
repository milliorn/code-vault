﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
    class Program
    {
        static void Main()
        {
            List<string> heroesList = new List<string> { "D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt" };

            // Query syntax
            string[] queryResult = (string[])(from h in heroesList
                                              where h.Contains("a")
                                              select $"{h} contains an 'a'");

            // Printing...
            Console.WriteLine($"queryResult has {queryResult.Length} elements");

            foreach (string s in queryResult)
            {
                Console.WriteLine(s);
            }
        }
    }
}
