using System;

namespace ChooseYourOwnAdventure
{
    class Adventure
    {
        //Write an if statement that checks to see if a user writes NO.
        //If the condition is YES, have it print the following text to the console:
        public static bool YesOrNo(string s)
        {
            if (s == "NO") 
            {
                Console.WriteLine("Not much of an adventure if we don't leave our room!");
                Console.WriteLine("THE END.");
                return false;

            }
            else if (s == "YES") 
            {
                Console.WriteLine("You walk into the hallway and see a light coming from under a door down the hall.");
                Console.WriteLine("You walk towards it. Do you open it or knock?");
                return true;
            }
            else
            {
                Console.WriteLine("ERROR!: YesOrNo");
                return false;
            }     
        }
        
        public static void Knock()
        {
            Console.WriteLine("A voice behind the door speaks. It says, \"Answer this riddle:\"");
            Console.WriteLine("\"Poor people have it. Rich people need it. If you eat it you die. What is it?\"");
        
            //Tell the user to answer the riddle:
            Console.Write("Type your answer:");
            string s = Console.ReadLine().ToUpper(); 
        
            //If a user types NOTHING, the program will print the following to the screen:
            if (s == "NOTHING")
            {
                Console.WriteLine("The door opens and NOTHING is there.");
                Console.WriteLine("You turn off the light and run back to your room and lock the door.");
                Console.WriteLine("THE END");
            }
            else 
            {
                Console.WriteLine("You answered incorrectly. The door doesn't open.");
                Console.WriteLine("THE END.");
            }
        }

        public static void Open()
        {
            Console.WriteLine("The door is locked! See if one of your three keys will open it.");
          
            //Get the user to give a number for the key they want to use:
            Console.Write("Enter a number (1-3):");
        
            //Save their response to a string variable
            string s = Console.ReadLine().ToUpper();
            while (String.IsNullOrWhiteSpace(s) || s != "1" && s != "2" && s != "3")
            {
                Console.Write("Sorry, didn't understand.  Enter a number (1-3):");
                s = Console.ReadLine().ToUpper();
            }

            //Write a switch statement that checks to see if a value is equal to either "1", "2", or "3".
            switch (s)
            {
                case "1": 	
                    Console.WriteLine("You choose the first key. Lucky choice!");
                    Console.WriteLine("The door opens and NOTHING is there. Strange...");
                    Console.WriteLine("THE END");
                    break;
          
                case "2": 	
                    Console.WriteLine("You choose the second key. The door doesn't open.");
                    Console.WriteLine("THE END");
                    break;
            
                case "3": 	
                    Console.WriteLine("You choose the third key. The door doesn't open.");
                    Console.WriteLine("THE END");
                    break;

                default: Console.WriteLine("ERROR: Open/Switch/Default"); break;
            }
        }
    } 
}
