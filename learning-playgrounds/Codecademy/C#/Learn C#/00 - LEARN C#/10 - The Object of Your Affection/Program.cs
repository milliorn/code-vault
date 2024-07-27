using System;
using System.Collections.Generic;
using System.Linq;

namespace DatingProfile
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("The Object of Your Affection");
      
      Console.Write("Please enter First Name:");
      string firstName = Console.ReadLine();
      while (String.IsNullOrWhiteSpace(firstName))
      {
        Console.Write("Sorry, didn't understand.  What is your First Name?: ");
        firstName = Console.ReadLine();
      }

      Console.Write("Please enter Last Name:");
      string lastName = Console.ReadLine();
      while (String.IsNullOrWhiteSpace(lastName))
      {
        Console.Write("Sorry, didn't understand.  What is your Last Name?: ");
        firstName = Console.ReadLine();
      }

      Console.Write("Please enter your Age:");
      string age = Console.ReadLine();
      while (String.IsNullOrWhiteSpace(age))
      {
        Console.Write("Sorry, didn't understand.  What is your Age?: ");
        firstName = Console.ReadLine();
      }
      
      int iAge;
      while (!Int32.TryParse(age, out iAge))
      {
        Console.WriteLine("Please respond with a number for your age:");
        Console.Write("Please enter your Age:");
        age = Console.ReadLine();
      }

      Console.Write("Please enter your City:");
      string city = Console.ReadLine();
      while (String.IsNullOrWhiteSpace(city))
      {
        Console.Write("Sorry, didn't understand.  What is your City?: ");
        city = Console.ReadLine();
      }

      Console.Write("Please enter your Country:");
      string country = Console.ReadLine();
      while (String.IsNullOrWhiteSpace(country))
      {
        Console.Write("Sorry, didn't understand.  What is your Country?: ");
        country = Console.ReadLine();
      }

      Console.Write("Please enter your Gender:");
      string gender = Console.ReadLine();
      while (String.IsNullOrWhiteSpace(gender))
      {
        Console.Write("Sorry, what is your Gender?: ");
        gender = Console.ReadLine();
      }

      gender = gender.ToUpper();
      while (gender != "MALE" && gender != "FEMALE")
      {
        Console.Write("Sorry, didn't understand.  What is your Gender?: ");
        gender = Console.ReadLine().ToUpper();
      }
      
      var g = new Profile();
      gender = g.MaleOrFemale(gender);
      
      //Above where you print sams profile information out, add some hobbies to sam: 
      Console.Write("What are your hobbies?:");
      string s = Console.ReadLine();
      string[] hobbys = s.Split(' ').ToList().ToArray(); 
      
      //Instantiate a new Profile object called sam.
      Profile sam = new Profile(firstName, lastName, iAge, city, country, gender);

      //If you call ViewProfile() before calling SetHobbies(), youll get an error because the hobbies field isnt set to any value. 
      //Fix the class so that you can call ViewProfile() without adding hobbies.
      if (hobbys != null) 
      {
        sam.SetHobbies(hobbys);
      }

      //In Main(), test out the new method on sam and print out the result.  Call sam.ViewProfile() and pass the result to Console.WriteLine().
      Console.WriteLine(sam.ViewProfile());
    }
  }
}
