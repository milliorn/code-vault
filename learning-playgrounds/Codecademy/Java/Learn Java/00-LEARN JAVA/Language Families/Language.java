public class Language {
    // In Language.java, create a Language class with a main() method and the
    // following fields:
    // name: a protected string.
    // numSpeakers: a protected integer.
    // regionsSpoken: a protected string.
    // wordOrder: a protected string.
    protected String name;
    protected int numSpeakers;
    protected String regionString;
    protected String wordOrder;

    // Above the main() method, give Language a constructor that sets each field to
    // the values passed in.
    public Language(String Name, int NumSpeakers, String RegionString, String WordOrder) {
        name = Name;
        numSpeakers = NumSpeakers;
        regionString = RegionString;
        wordOrder = WordOrder;
    }

    // Create a public method for Language called getInfo(). We’ll use this method
    // to display all of its information (using its field values).
    // The method should not return anything.
    public void getInfo() {
        System.out.println(name + " is spoken by " + numSpeakers + " people mainly in " + regionString
                + ".\nThe language follows the word order:" + wordOrder + ".");
    }

    public static void main(String[] args) {
        // In main(), instantiate a new Language of your choice.
        // Then call getInfo() on the Language variable.
        Language spanish = new Language("Spanish", 112396211, "Mexico", "subject-verb-object");
        spanish.getInfo();

        // In main(), instantiate a new Mayan language of your choice (you can find one
        // here).
        // Then call getInfo() on the language variable.
        Language mayan = new Mayan("Chontal", 36810);
        mayan.getInfo();

        // Test out the SinoTibetan class by instantiating two new Sino-Tibetan language
        // objects of your choosing:
        // Then call getInfo() on each language variable.
        Language mandarin = new SinoTibetan("Mandarin Chinese", 917000000);
        Language burmese = new SinoTibetan("Burmese", 917000000);

        mandarin.getInfo();
        burmese.getInfo();
    }
}
