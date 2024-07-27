import java.util.Random;

public class EightBall {
    public static String Answer() {

        Random random = new Random();
        int randomNumber = random.nextInt(20);
        String answer = "";

        switch (randomNumber) {
            case 0:
                answer = "It is certain.";
                break;
            case 1:
                answer = "It is decidedly so.";
                break;
            case 2:
                answer = "Without a doubt.";
                break;
            case 3:
                answer = "Yes - definitely.";
                break;
            case 4:
                answer = "You may rely on it.";
                break;
            case 5:
                answer = "As I see it, yes.";
                break;
            case 6:
                answer = "Most likely.";
                break;
            case 7:
                answer = "Outlook good.";
                break;
            case 8:
                answer = "Yes.";
                break;
            case 9:
                answer = "Signs point to yes.";
                break;
            case 10:
                answer = "Reply hazy, try again.";
                break;
            case 11:
                answer = "Ask again later.";
                break;
            case 12:
                answer = "Better not tell you now.";
                break;
            case 13:
                answer = "Cannot predict now.";
                break;
            case 14:
                answer = "Concentrate and ask again.";
                break;
            case 15:
                answer = "Don't count on it.";
                break;
            case 16:
                answer = "My reply is no.";
                break;
            case 17:
                answer = "My sources say no.";
                break;
            case 18:
                answer = "Outlook not so good.";
                break;
            case 19:
                answer = "Very doubtful.";
                break;
            default:
                answer = "Out of bounds in default!  How did you get here?";
                break;
        }
        return answer;
    }
}
