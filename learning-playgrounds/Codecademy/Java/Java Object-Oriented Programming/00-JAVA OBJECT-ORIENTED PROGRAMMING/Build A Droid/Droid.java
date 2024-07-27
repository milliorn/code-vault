// Start by defining the class Droid.
public class Droid {
    // Declare an instance field called batteryLevel. We want to store whole number
    // values in this field.
    private int batterylevel;

    // Declare another instance field called name which will store our droids name.
    private String name;

    // Create a constructor method for the Droid class. The method should have one
    // parameter of String droidName.

    public Droid(String droidName) {
        // Inside the constructor, assign the parameter value of droidName to the
        // appropriate instance field. Set the value of batteryLevel to 100. Every new
        // instance of Droid will have a batteryLevel of 100.
        name = droidName;
        batterylevel = 100;
    }

    /*
     * Define a toString() method within Droid. The return type is String. Inside
     * toString(), return a string that introduces the Droid using their name.
     * Something like “Hello, I’m the droid: droidNameHere”
     */
    public String toString() {
        return "Hello, I'm a droid. My name is " + name;
    }

    /*
     * Define a new method: performTask(). This method should have a single
     * parameter: String task.
     * 
     * Performing tasks is hard work. After the print statement, set batteryLevel to
     * be 10 less than it was before.
     */
    public void performTask(String task) {
        System.out.println(name + " is performing task: " + task);
        batterylevel -= 10;
    }

    /*
     * Create a energyReport() method that prints the instance’s batteryLevel.
     */
    public void energyReport() {
        System.out.println(name + " energy level: " + batterylevel);
    }

    /*
     * Create a method energyTransfer() that exchanges batteryLevel between
     * instances.
     */
    public static void energyTransfer(Droid sender, Droid receiver, int power) {
        for (int i = 0; i < power; i++) {
            if (sender.batterylevel <= 0) {
                System.out.println(sender.name + " is out of power to send.");
                return;
            } else if (receiver.batterylevel >= 100) {
                System.out.println(receiver.name + " is full power.");
                return;
            } else if (sender.batterylevel > 0 && receiver.batterylevel < 100) {
                sender.batterylevel--;
                receiver.batterylevel++;
                sender.energyReport();
                receiver.energyReport();
            }
        }
    }

    public static void main(String[] args) {
        // Inside main(), create a new instance of Droid named "Codey".
        Droid droid = new Droid("Codey");

        // Print out the variable using System.out.println().
        System.out.println(droid);
        System.out.println(droid.batterylevel);
        System.out.println(droid.name);
        droid.toString();
        droid.performTask("dancing");
        droid.energyReport();

        // Create another instance.
        Droid robot = new Droid("Ted");
        energyTransfer(robot, droid, 10);
    }
}
