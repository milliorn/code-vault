import java.util.StringTokenizer;

public class StringToArrayExample {
  public static void main(String[] args) {
    String str = "Java is a programming language\n";
    String[] words = str.split(" ");
    for (String word : words) {
      System.out.println(word);
    }

    char[] chars = str.toCharArray();

    for (char c : chars) {
      System.out.println(c);
    }

    StringTokenizer tokenizer = new StringTokenizer(str, ",");

    while (tokenizer.hasMoreTokens()) {
      System.out.println(tokenizer.nextToken());
    }
    
  }
}