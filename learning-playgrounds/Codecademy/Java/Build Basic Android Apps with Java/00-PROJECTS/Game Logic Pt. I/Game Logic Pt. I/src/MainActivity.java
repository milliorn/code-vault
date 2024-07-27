import java.util.Random;

public class MainActivity {

    // Add generateRandomNumber() here
    /*
     * You will use this method to pick new questions at random to keep Unquote
     * players on their toes! You will use this method to pick new questions at
     * random to keep Unquote players on their toes!
     * 
     * Call Math.random() within generateRandomNumber() and save it to a local
     * variable.
     * 
     * Calculate a random number between 0 and max
     * 
     * Use the result from task 6 to calculate a random number between 0 and max
     * (the parameter you pass into generateRandomNumber()) and save it to a local
     * double variable.
     * 
     * Within generateRandomNumber(), cast the result from task 7 to an integer
     * type, and save it to a new variable.
     * 
     * 
     */
    public int generateRandomNumber(int max) {
        return new Random().nextInt(max);
    }
    // Add getGameOverMessage() here
    /*
     * When the player submits their answer to the final question, the game ends. At
     * which point, you present the player with one of two possible messages:
     * 
     * “You got all 6 right! You won!” Or “You got 3 right out of 6. Better luck
     * next time!” You will create a method that generates this String message.
     * 
     * Begin by defining a method in MainActivity named getGameOverMessage(), it
     * must accept two integer inputs (totalCorrect and totalQuestions), and return
     * a String object.
     */
    public String getGameOverMessage(int totalCorrect, int totalQuestions) {
        String message1 = "You got all 6 right! You won!";
        String message2 = "You missed a few. Better luck next time!";
        return totalCorrect == totalQuestions ? message1 : message2;
    }
}