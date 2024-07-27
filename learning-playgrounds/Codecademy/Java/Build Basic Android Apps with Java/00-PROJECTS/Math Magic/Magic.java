import java.util.Random;

public class Magic {
    public static void main(String[] args) {
        // Create an int variable called myNumber.
        // Set it equal to any integer other than 0.
        Random random = new Random(Byte.MAX_VALUE);

        // We will refer to myNumber as the original number from now on - it might be
        // helpful to document this.
        int myNumber = random.nextInt(Byte.MAX_VALUE);

        // Create an int variable called stepOne.
        // Set it equal to the original number (myNumber) multiplied by itself.
        int stepOne = myNumber * myNumber;

        // Create an int variable called stepTwo.
        // Set it equal to the previous result (stepOne) plus the original number
        // (myNumber).
        int stepTwo = stepOne + myNumber;

        // Create an int variable called stepThree.
        // Set it equal to the previous result (stepTwo) divided by the original number.
        int stepThree = stepTwo / myNumber;

        // Create an int variable called stepFour.
        // Set it equal to the previous result (stepThree) plus 17.
        int stepFour = stepThree + 17;

        // Create an int variable called stepFive.
        // Set it equal to the previous result (stepFour) minus the original number.
        int stepFive = stepFour - myNumber;

        // Create an int variable called stepSix.
        // Set it equal to the previous result (stepFive) divided by 6.
        int stepSix = stepFive / 6;

        // Print out the value of the last step.
        System.out.println(stepSix);

        // 3 will be printed to the console no matter what integer you choose as the
        // original number!

        /*
         * Suppose myNumber is x:
         *
         * ( ( ( x² + x ) / x ) + 17 - x ) / 6
         *
         * = ( ( x + 1 ) + 17 - x ) / 6
         *
         * = ( x + 18 - x ) / 6
         *
         * = 18 / 6
         *
         * = 3
         */
    }
}