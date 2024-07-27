public class Mayan extends Language {
    // Tab over to Mayan.java and create an empty Mayan class that inherits from
    // Language.
    // Tweak the Mayan constructor so that it isn’t necessary to pass in these
    // fields when instantiating a new Mayan language object.
    Mayan(String Name, int NumSpeakers) {
        super(Name, NumSpeakers, "Central America", "verb-object-subject");
    }

    // Override the getInfo() method for Mayan so that if we called getInfo() on a
    // Mayan language like Ki’che’, we’d get the following info:
    @Override
    public void getInfo() {
        System.out.println(name + " is spoken by " + numSpeakers + " people mainly in " + regionString
                + ".\nFun fact: Ki'che' is an " + wordOrder + ".");
    }
}
