// Create a public class called Calculator.
public class Calculator {

    // create a public method that returns an int
    // method should accept two int parameters
    // add the two integer parameters that a user will specify
    public int add(int a, int b) {
        return a + b;
    }

    // The subtract() method should accept two int parameters, just like the add()
    // method does
    public int subtract(int a, int b) {
        return a - b;
    }

    // The multiply() method should accept two int parameters.
    public int multiply(int a, int b) {
        return a * b;
    }

    // Create another method called divide(). It should accept two int parameters.
    public int divide(int a, int b) {
        return a / b;
    }

    // Create another method called modulo. It should accept two int parameters.
    public int modulo(int a, int b) {
        return a % b;
    }

    public static void main(String[] args) {
        // create a Calculator object called myCalculator.
        Calculator myCalculator = new Calculator();

        // Print out the value of calling the add() method on myCalculator
        System.out.println(myCalculator.add(5, 7));

        // print out the value of calling the subtract() method on myCalculator
        System.out.println(myCalculator.subtract(45, 11));
    }
}
