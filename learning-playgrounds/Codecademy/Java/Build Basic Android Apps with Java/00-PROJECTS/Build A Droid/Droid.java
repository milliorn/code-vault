// Start by defining the class Droid.
// We want a Droid object that has the following state:
// name
// battery level
// performing a task
// stating its battery level

public class Droid {

    public String name;
    public int batteryLevel;

    // The method should have one parameter of String droidName.
    // Assign the parameter value of droidName to the appropriate instance field.
    // Set the value of batteryLevel to 100.

    public Droid(String droidName) {
        name = droidName;
        batteryLevel = 100;
    }

    // Define a toString() method within Droid.
    // The return type is String.
    // Inside toString(), return a string that introduces the Droid using their
    // name.

    public String toString() {
        return "Hello, I'm the droid " + name;
    }

    // Define a new method: performTask(). This method should have a single
    // parameter: String task.
    // This method does not return any value.
    // print a statement like “name is performing task: task“.
    // set batteryLevel to be 10 less than it was before.

    public void performTask(String task) {
        System.out.println(name + " is performing task: " + task);
        batteryLevel -= 10;
    }

    public static void abortEnergyTransfer() {
        System.out.println("Energy transfer has ended.");
    }

    // Create a energyReport() method that prints the instance’s batteryLevel.

    public void energyReport() {
        System.out.println(name + " battery level is " + batteryLevel);
    }

    public static void energyTransfer(Droid sender, Droid receiver) {
        System.out.println("Energy transfer initiated.");

        for (int i = receiver.batteryLevel; i < 100; i++) {
            if (sender.batteryLevel == 0) {
                sender.energyReport();
                abortEnergyTransfer();
                return;
            } else if (receiver.batteryLevel == 100) {
                receiver.energyReport();
                return;
            } else {
                sender.batteryLevel--;
                sender.energyReport();

                receiver.batteryLevel++;
                receiver.energyReport();
            }
        }
        
        abortEnergyTransfer();
    }

    public static void main(String[] args) {
        // create a new instance of Droid named "Codey".

        Droid codey = new Droid("Codey");
        Droid bob = new Droid("Bob");

        codey.performTask("printing");

        codey.energyReport();
        bob.energyReport();

        energyTransfer(bob, codey);
    }
}