public class SinoTibetan extends Language {
    // Tab over to SinoTibetan.java and build out an empty SinoTibetan class that
    // inherits from Language.
    // Like the Mayan language family, Sino-Tibetan languages share several traits
    // in common. In this case:
    // Build a constructor for SinoTibetan that so that it isn’t necessary to pass
    // in these fields when instantiating a new SinoTibetan language object.
    // In the constructor, below where you called super(), change the wordOrder to
    // "subject-verb-object" if this.name contains "Chinese".
    SinoTibetan(String Name, int NumSpeakers) {
        super(Name, NumSpeakers, "Asia", "subject-object-verb");

        if (this.name.contains("Chinese")) {
            wordOrder = "subject-verb-object";
        }
    }
}