public class Question {
    int imageId;
    String questionText;
    String answer0;
    String answer1;
    String answer2;
    String answer3;
    int correctAnswer;
    int playerAnswer;

    public Question(int imageIdentifier, String questionString, String answerZero, String answerOne, String answerTwo,
            String answerThree, int correctAnswerIndex) {
        imageId = imageIdentifier;
        questionText = questionString;
        answer0 = answerZero;
        answer1 = answerOne;
        answer2 = answerTwo;
        answer3 = answerThree;
        correctAnswer = correctAnswerIndex;
        playerAnswer = -1;
    }

    // Add isCorrect() here
    /*
     * We want to add a method that returns true if the player answered the question
     * correctly and false otherwise.
     * 
     * Determine whether the player answered the question correctly.
     * 
     * How do we know if the player selected the correct answer? Remember that your
     * Question object has the member variables correctAnswer and playerAnswer—both
     * integers.
     * 
     * The isCorrect() method should compare correctAnswer and playerAnswer. If
     * they’re the same, the method should return true. Otherwise, it should return
     * false
     */
    public Boolean isCorrect() {
        return correctAnswer == playerAnswer;
    }
}
