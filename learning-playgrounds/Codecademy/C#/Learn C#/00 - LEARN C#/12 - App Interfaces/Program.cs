namespace SavingInterface
{
    class Program
    {
        static void Main(string[] args)
        {
            TodoList tdl = new TodoList();
            PasswordManager pm = new PasswordManager("iluvpie", false);

            tdl.Add("Test");

            //Call Display() on tdl and pm. Run the program with:
            tdl.Display();
            pm.Display();

            //In Program.cs, call Reset() and Display() with tdl and pm.
            //In other words, both objects should display, then reset, then display again.
            tdl.Reset();
            pm.Reset();
        }
    }
}
