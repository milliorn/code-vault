import java.util.Scanner;

public class Magic8 {
    public static void main(String[] args) {

        System.out.println("Welcome to Magic 8 Ball!");

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Press E to Exit or C to Continue.");

        Scanner scanner = new Scanner(System.in);
        char input = scanner.next().charAt(0);

        Boolean isActive = true;

        while (isActive) {
            if (Character.toUpperCase(input) == 'E') {
                System.out.println("Goodbye!");
                scanner.close();
                isActive = false;
                return;
            } else if (Character.toUpperCase(input) == 'C') {
                System.out.println("What is your question?  Type your question an press Enter.");
                scanner.next();
                isActive = false;

                try {
                    System.out.print("The answer to your question...");
                    Thread.sleep(1000);
                    System.out.println(EightBall.Answer());
                    scanner.close();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                    scanner.close();
                    isActive = false;
                }
            } else {
                System.out.println("Sorry, I did not understand what you typed in.");
                System.out.println("Press E to Exit or C to Continue.");
                input = scanner.next().charAt(0);
            }
        }
    }
}