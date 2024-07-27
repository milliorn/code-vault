public class DNA {
    /*
     * Let’s create a skeleton for the program. Add the following into DNA.java:
     * 
     * Write a comment near the top of the program that describe what the program
     * does.
     */
    public static void main(String[] args) {
        /*
         * Here are the three DNA strands that you are going to use to test your
         * program:
         */
        String dna1 = "ATGCGATACGCTTGA";
        String dna2 = "ATGCGATACGTGA";
        String dna3 = "ATTAATATGTACTGA";
        /*
         * Create a generic String variable called dna that can be set to any DNA
         * sequence (dna1, dna2, dna3).
         */
        String[] dna = { dna1, dna2, dna3 };
        /*
         * To warm up, find the length of the dna string.
         * 
         * Added var to easily change values for testing
         */
        String test = dna[0];
        System.out.println(test.length());
        /*
         * Remember that a protein has the following qualities:
         * 
         * It begins with a start codon ATG. It ends with a stop codon TGA. In between,
         * the number of nucleotides is divisible by 3.
         * 
         * First, let’s start with the first condition. Does the DNA strand have the
         * start codon ATG within it?
         * 
         * Find the index where ATG begins using indexOf().
         */
        int startCodonDna1 = test.indexOf("ATG");
        System.out.println("ATG found at index: " + startCodonDna1);
        /*
         * Next, does the DNA strand have the stop codon TGA?
         * 
         * Find the index where TGA begins.
         */
        int stopCodonDna1 = test.indexOf("TGA");
        System.out.println("TGA found at index: " + stopCodonDna1);
        /*
         * Lastly, you’ll find out whether or not there is a protein!
         * 
         * Let’s start with an if statement that checks for a start codon and a stop
         * codon using the && operator.
         * 
         * Remember that the indexOf() string method will return -1 if the substring
         * doesn’t exist within a String.
         * 
         * Add a third condition that checks whether or not that the number of
         * nucleotides in between the start codon and the stop condon is a multiple of
         * 3.
         * 
         * Inside the if statement, create a String variable named protein.
         * 
         * And find this protein in the dna by using the substring() string method.
         * Think about where you want the substring to begin and where you want the
         * substring to end.
         * 
         * Remember that a codon is 3 nucleotides long. Add an else clause that print
         * out No protein..
         * 
         * Add an else clause that print out No protein.
         */
        if (startCodonDna1 != -1 && stopCodonDna1 != -1 && (stopCodonDna1 - startCodonDna1) % 3 == 0) {
            System.out.println("Start and Stop Codon found! Number of nucleotides is correct.");
            String protein = dna1.substring(startCodonDna1, stopCodonDna1 + 3);
            System.out.print("Protein:" + protein);
        } else {
            System.out.println("No protein found.");
        }
    }
}
