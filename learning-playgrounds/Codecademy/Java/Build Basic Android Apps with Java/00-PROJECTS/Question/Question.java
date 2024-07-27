public class Question {
    /*
     * Track some key pieces of data.
     * 
     * Unquote numbers the possible answers from 0-3. Each Question object will
     * store two critical integers: one integer will track the correct answer
     * (correctAnswer) and another will track the player’s answer (playerAnswer).
     * 
     * Declare these two member variables within the Question class.
     * 
     * Track one more whole number.
     * 
     * In Android, our code can reference non-code files that we include in our
     * application (images, text, sounds, etc.) through a resource identifier. Each
     * identifier is a unique whole number that refers to a specific resource. Each
     * trivia question will present an image with a quotation to the player. You
     * will store these images as Android resource files.
     * 
     * Declare a third member variable in Question to store the identifier (an
     * integer) of the image. You should name this variable, imageId.
     * 
     * Store 5 String objects.
     * 
     * Question must store a unique, quote-specific questionText for each image we
     * present to the player.
     * 
     * Along with each questionText, your Question object must store four
     * multiple-choice answers for players to choose from (answer0…answer3).
     * 
     * Define a constructor method.
     * 
     * To create a new copy of the Question object, you must use a constructor
     * method.
     * 
     * Add a constructor method to Question which assigns the following values to
     * each new Question object:
     * 
     * int imageIdentifier (imageId) String questionString (questionText) String
     * answerZero (answer0) String answerOne (answer1) String answerTwo (answer2)
     * String answerThree (answer3) int correctAnswerIndex (correctAnswer)
     * 
     * Assign a default value to playerAnswer.
     * 
     * We left one piece of data unassigned, playerAnswer.
     * 
     * Players will need to see the question before they can answer it. If the
     * player manages to give an answer before we even present the question, they
     * defy the space-time continuum…
     * 
     * Before moving onto the next question, playerAnswer will store a number
     * between 0 and 3, indicating the choice the player made among the four
     * options.
     * 
     * Until the player selects a choice, playerAnswer must store a default value.
     * 
     * Have the constructor assign -1 as the default value for playerAnswer.
     */
    int correctAnswer;
    int imageId;
    int playerAnswer;
    String answer1;
    String answer2;
    String answer3;
    String answer4;
    String questionText;

    public Question(int correctAnswer, int imageId, String questionText, String answer1, String answer2, String answer3,
            String answer4) {
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
        this.imageId = imageId;
        this.questionText = questionText;
        playerAnswer = -1;
    }
}
