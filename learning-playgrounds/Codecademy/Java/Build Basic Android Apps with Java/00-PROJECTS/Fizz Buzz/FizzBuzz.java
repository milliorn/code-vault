public class FizzBuzz {
    public static void main(String[] args) {
        // Write a for loop that starts at 1 and iterates to 100.
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
                continue;
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                // Inside the for loop, output the counter i.
                System.out.println(i);
            }
        }
    }
}