// Define IDisplayable in this file
//Every app must have a display feature. In IDisplayable.cs, define an empty IDisplayable interface.
//Within IDisplayable declare one method that: is named Display(), returns nothing.

namespace SavingInterface
{
    interface IDisplayable
    {
        void Display();

        //Add a get-only property to IDisplayable called HeaderSymbol.
        //This should be used in Display() as a header.
        string HeaderSymbol { get; }
    }
}