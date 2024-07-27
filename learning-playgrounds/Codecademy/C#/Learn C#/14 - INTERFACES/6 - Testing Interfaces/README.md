INTERFACES
Testing Interfaces
Now we have a Sedan class and Truck class that implement the IAutomobile interface. Though they have some different behaviors, they both have the properties and method defined in the interface:

double Speed
string LicensePlate
int Wheels
void Honk()
At this point we can be confident that we won’t cause any errors if we try to access these members in either the Sedan or Truck class.
