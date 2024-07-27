//In TodoList.cs, declare that the class implements the IDisplayable interface.

using System;
using System.Collections.Generic;

namespace SavingInterface
{
    class TodoList : IDisplayable, IResetable
    {
        public string HeaderSymbol => "-----------";
        private List<string> ToDo;

        public TodoList() => this.ToDo = new List<string>();

        public void Add(string todo) => ToDo.Add(todo);

        //The class must actually implement the interface by defining a Display() method.
        //Define a method that:
        //satisfies the interface requirements
        //uses Console.WriteLine() to write each to-do item to the console
        public void Display()
        {
            Console.WriteLine("Todos");
            Console.WriteLine(HeaderSymbol);

            foreach (String s in ToDo)
            {
                Console.WriteLine(s);
            }

            Console.WriteLine(HeaderSymbol);
        }

        ////In TodoList.cs, implement the interface:
        //Declare that it implements IResetable
        //Define a Reset() method to satisfy the interface.
        //It should set the Todos property to an empty array of length 5 and set nextOpenIndex to 0
        public void Reset() => ToDo.Clear();
    }
}