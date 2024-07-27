using System;
using System.Collections.Generic;

namespace LearnLists
{
    class Program
    {
        static void Main()
        {
            List<string> citiesList = new List<string> { "Delhi", "Los Angeles", "Saint Petersburg" };
            //  Add your city to the list,
            //  then use a foreach loop to print the whole list to the console.
            citiesList.Add("Fresno");

            foreach (string item in citiesList)
            {
                Console.WriteLine(item);
            }
        }
    }
}
