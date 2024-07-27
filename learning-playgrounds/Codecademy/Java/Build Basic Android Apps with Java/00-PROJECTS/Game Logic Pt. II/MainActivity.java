import java.util.ArrayList;

public class MainActivity {
    public int currentQuestionIndex;
    public int totalCorrect;
    public int totalQuestions;

    public ArrayList<Question> questions;

    public void startNewGame() {
        Question questions1 = new Question(921238, "How tall is the Eiffel tower?", "1024 ft", "1063 ft", "1124 ft",
                "1163 ft", 1);

        Question questions2 = new Question(107343, "Who invented the computer algorithm?", "Charles Babbage",
                "John Carmack", "Alan Turing", "Ada Lovelace", 3);

        Question questions3 = new Question(748294, "What is the name for the patch of skin found on your elbow?",
                "Elbow Skin", "Fascia Elbora", "Wenis", "Todd", 2);

        ArrayList<Question> questions = new ArrayList<>();
        questions.add(questions1);
        questions.add(questions2);
        questions.add(questions3);

        totalCorrect = 0;
        totalQuestions = 0;

        Question firstQuestion = chooseNewQuestion();
        // displayQuestion(firstQuestion);
        // displayQuestionsRemaining(questions.size());
    }

    public Question chooseNewQuestion() {
        int randomNumber = generateRandomNumber(3);
        currentQuestionIndex = randomNumber;
        return questions.get(currentQuestionIndex);
    }

    public Question getCurrentQuestion() {
        return questions.get(currentQuestionIndex);
    }

    public void onAnswerSubmission() {
        Question currentQuestion = getCurrentQuestion();

        if (currentQuestion.isCorrect()) {
            totalCorrect++;
            questions.remove(currentQuestionIndex);
        }

        if (questions.isEmpty()) {
            System.out.println("game over");
            startNewGame();

        } else {
            chooseNewQuestion();
        }
    }

    int generateRandomNumber(int max) {
        double randomNumber = Math.random();
        double result = max * randomNumber;
        return (int) result;
    }

    String getGameOverMessage(int totalCorrect, int totalQuestions) {
        if (totalCorrect == totalQuestions) {
            return "You got all " + totalQuestions + " right! You won!";
        } else {
            return "You got " + totalCorrect + " right out of " + totalQuestions + ". Better luck next time!";
        }
    }
}