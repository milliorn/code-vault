import java.util.ArrayList;

class Playlist {

    public static void main(String[] args) {
        // Inside main(), create a new ArrayList called desertIslandPlaylist that can
        // hold String values.
        ArrayList<String> desertIslandPlaylist = new ArrayList<>();

        // Use add() to add several (more than five) of your favorite songs to
        // desertIslandPlaylist.
        desertIslandPlaylist.add("Paradise City");
        desertIslandPlaylist.add("One");
        desertIslandPlaylist.add("Angel of Death");
        desertIslandPlaylist.add("Cruelty and the Beast");
        desertIslandPlaylist.add("Starlight");
        desertIslandPlaylist.add("Black Dog");

        // Check out your personally curated selection of music by printing
        // desertIslandPlaylist to the terminal. Then run your code.
        System.out.println(desertIslandPlaylist.toString());

        // First, check the number of songs on your playlist using size(). Print the
        // number to the terminal.
        System.out.println(desertIslandPlaylist.size());

        // Now, you’ll need to make some tough decisions. Remove songs from your
        // playlist using remove() until you only have five songs left.
        while (desertIslandPlaylist.size() > 5) {
            desertIslandPlaylist.remove(desertIslandPlaylist.size() - 1);
        }

        // Create a temporary variable to store the value of song a. (We’ll call the
        // songs a and b here.)
        // Rewrite the value at the index of b to the value of the temporary variable.
        String tempA = desertIslandPlaylist.get(desertIslandPlaylist.size() - 1);

        // Rewrite the value at the index of a to the value of b.
        String tempB = desertIslandPlaylist.get(0);

        // Pick out two songs whose order you’d like to swap.
        // Get the indices of the songs you want to swap.
        // Use indexOf() to get the indices of the two songs you want to swap in
        // desertIslandPlaylist. (You can store these as variables or print them out.)
        int firstIndex = desertIslandPlaylist.indexOf(desertIslandPlaylist.get(0));
        int lastIndex = desertIslandPlaylist.indexOf(desertIslandPlaylist.get(desertIslandPlaylist.size() - 1));

        // Call set() on desertIslandPlaylist to rewrite the song at the index of a with
        // song b. (You’re adding song b where a was in the playlist.)
        desertIslandPlaylist.set(firstIndex, tempA);

        // Use set() again on desertIslandPlaylist. This time, give the original index
        // of song b the value of your temporary variable (which is really song a). In
        // other words, you’re putting song a where song b used to be.
        desertIslandPlaylist.set(lastIndex, tempB);

        System.out.println(desertIslandPlaylist.toString());
    }
}