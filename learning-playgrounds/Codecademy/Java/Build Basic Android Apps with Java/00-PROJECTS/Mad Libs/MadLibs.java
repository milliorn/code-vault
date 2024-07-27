import java.util.Random;
import java.util.Scanner;

public class MadLibs {
    /*
     * Let’s create a comment that describes the program!
     *
     * This program generates a mad libbed story. Author: Scott Milliorn - 10/3/2020
     */
    public static void main(String[] args) {
        /*
         * Take a look at the variable named story. It is set equal to a string that
         * will contain our story.
         *
         * All of these variables will need to be declared and initialized before the
         * code will compile without errors.
         */

        // Create instance of Random class
        Random rand = new Random();
        int number = rand.nextInt(Integer.MAX_VALUE);

        String[] name = { "", "" };
        String[] adjective = { "", "", "" };
        String[] noun = { "", "", "", "", "", "" };

        String place1 = "";

        String verb1 = "";

        Scanner scanner = new Scanner(System.in); // Create a Scanner object

        System.out.print("Enter a name:");
        name[0] = scanner.nextLine();

        while (name[0].isEmpty()) {
            System.out.print("Try again.  Enter a name:");
            name[0] = scanner.nextLine();
        }

        System.out.print("Enter another name:");
        name[1] = scanner.nextLine();

        while (name[1].isEmpty()) {
            System.out.print("Try again.  Enter another name:");
            name[1] = scanner.nextLine();
        }

        System.out.print("Enter an adjective:");
        adjective[0] = scanner.nextLine();

        while (adjective[0].isEmpty()) {
            System.out.print("Try again.  Enter another name:");
            adjective[0] = scanner.nextLine();
        }

        System.out.print("Enter another adjective:");
        adjective[1] = scanner.nextLine();

        while (adjective[1].isEmpty()) {
            System.out.print("Try again.  Enter another adjective:");
            adjective[1] = scanner.nextLine();
        }

        System.out.print("Enter one more adjective:");
        adjective[2] = scanner.nextLine();

        while (adjective[2].isEmpty()) {
            System.out.print("Try again.  Enter one more adjective:");
            adjective[2] = scanner.nextLine();
        }

        System.out.print("Enter 1st noun:");
        noun[0] = scanner.nextLine();

        while (noun[0].isEmpty()) {
            System.out.print("Try again.  Enter 1st noun:");
            noun[0] = scanner.nextLine();
        }

        System.out.print("Enter 2nd noun:");
        noun[1] = scanner.nextLine();

        while (noun[1].isEmpty()) {
            System.out.print("Try again.  Enter 2nd noun:");
            noun[1] = scanner.nextLine();
        }

        System.out.print("Enter 3rd noun:");
        noun[2] = scanner.nextLine();

        while (noun[2].isEmpty()) {
            System.out.print("Try again.  Enter 3rd noun:");
            noun[2] = scanner.nextLine();
        }

        System.out.print("Enter 4th noun:");
        noun[3] = scanner.nextLine();

        while (noun[3].isEmpty()) {
            System.out.print("Try again.  Enter 4th noun:");
            noun[3] = scanner.nextLine();
        }

        System.out.print("Enter 5th noun:");
        noun[4] = scanner.nextLine();

        while (noun[4].isEmpty()) {
            System.out.print("Try again.  Enter 5th noun:");
            noun[4] = scanner.nextLine();
        }

        System.out.print("Enter 6th noun:");
        noun[5] = scanner.nextLine();

        while (noun[5].isEmpty()) {
            System.out.print("Try again.  Enter 6th noun:");
            noun[5] = scanner.nextLine();
        }

        System.out.print("Enter a place:");
        place1 = scanner.nextLine();

        while (place1.isEmpty()) {
            System.out.print("Try again.  Enter a place:");
            place1 = scanner.nextLine();
        }

        System.out.print("Enter a verb:");
        verb1 = scanner.nextLine();

        while (verb1.isEmpty()) {
            System.out.print("Try again.  Enter a verb:");
            place1 = scanner.nextLine();
        }

        // The template for the story
        String story = "This morning " + name[0] + " woke up feeling " + adjective[0] + ". 'It is going to be a "
                + adjective[1] + " day!' Outside, a bunch of " + noun[0] + "s were protesting to keep " + noun[1]
                + " in stores. They began to " + verb1 + " to the rhythm of the " + noun[2] + ", which made all the "
                + noun[3] + "s very " + adjective[2] + ". Concerned, " + name[0] + " texted " + name[1] + ", who flew "
                + name[0] + " to " + place1 + " and dropped " + name[0] + " in a puddle of frozen " + noun[4] + ". "
                + name[0] + " woke up in the year " + number + ", in a world where " + noun[5] + "s ruled the world.";

        // Time to read the story! Use System.out.println() to print the story variable.
        System.out.println(story);

        // This is so we stop this message: Resource leak: 'scanner' is never closed
        scanner.close();
    }
}
