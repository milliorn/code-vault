using System;

namespace DatingProfile
{
  class Profile //set up the skeleton of the Profile class.
  {
    //Add the following fields to Profile
    //Add private to all the fields you created in Profile.
    private string firstname;
    private string lastname;
    private int age;
    private string city;
    private string country;
    private string pronouns;
    private string[] hobbies;
  
    /*Users should be able to add their profile information in a constructor.
    Define the constructor and set the fields to the values passed in.
    Use this to differentiate parameters from instance fields.*/
    public Profile(string firstname, string lastname, int age, string city = "", string country = "", string pronouns = "they/them")
    {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.city = city;
      this.country = country;
      this.pronouns = pronouns;
    }
    
    public Profile()
    {}

    //Define a ViewProfile() method under the constructor.  It should have Public Access, return type of string, no parameters
    public string ViewProfile()
    {
      string bio = ($"Name: {firstname} {lastname}\nAge: {age}\nCity: {city}\nCountry: {country}\nGender: {pronouns}");
     
     //If you call ViewProfile() before calling SetHobbies(), youll get an error because the hobbies field isnt set to any value. 
     //Fix the class so that you can call ViewProfile() without adding hobbies. 
      if (this.hobbies.Length != 0)
      {
        foreach (string s in this.hobbies)
        {
          bio += $"\nHobbies: {s}";
        }
      }
      
      return age < 18 ? "You are not of age to view this profile": bio;
    }

    //Give users a way to set hobbies. Declare a new method SetHobbies() with public access, no return value, a string[] parameter named hobbies. In the method body, set the field this.hobbies equal to the hobbies argument.
    public void SetHobbies(string[] hobbies) => this.hobbies = hobbies;

    public string MaleOrFemale(string s) => s == "MALE" ? "Male" : "Female";
  }
}
