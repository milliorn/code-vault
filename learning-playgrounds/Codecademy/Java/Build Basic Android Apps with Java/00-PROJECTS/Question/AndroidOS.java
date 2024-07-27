public class AndroidOS {
    public AndroidOS() {
        System.out.println("AndroidOS Booting Up...");
    }

    public void runQuizApp() {
        // Create three questions here

        // System.out.println("Question 1: "" + ...)
    }

    /*
     * In the AndroidOS.java file, create three Question objects within the
     * runQuizApp() method.
     * 
     * Use your Question constructor to declare three new Question objects. You can
     * make them anything you want (or use our sample data found in
     * SampleQuestions.txt).
     */
    public static void main(String[] args) {
        System.out.println("Starting: AndroidOS");
        AndroidOS androidOS = new AndroidOS();
        androidOS.runQuizApp();
        Question question = new Question(1, 921238, "How tall is the Eiffel tower?", "1024 ft", "1063 ft", "1124 ft",
                "1163 ft");
        System.out.println(question.answer1);
        System.out.println(question.answer2);
        System.out.println(question.answer3);
        System.out.println(question.answer4);
        System.out.println(question.correctAnswer);
        System.out.println(question.imageId);
        System.out.println(question.playerAnswer);
        System.out.println(question.questionText);

    }
}