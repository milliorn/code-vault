import java.util.ArrayList;

class Playlist {

  public static void main(String[] args) {
    /*
     * Inside main(), create a new ArrayList called desertIslandPlaylist that can
     * hold String values.
     */
    ArrayList<String> desertIslandPlaylist = new ArrayList<>();

    /*
     * Use add() to add several (more than five) of your favorite songs to
     * desertIslandPlaylist.
     */
    desertIslandPlaylist.add("Hey Jude");
    desertIslandPlaylist.add("Kind of Magic");
    desertIslandPlaylist.add("Best of Burden");
    desertIslandPlaylist.add("Long Time");
    desertIslandPlaylist.add("Girls, Girls, Girls");
    desertIslandPlaylist.add("Los Ageless");
    desertIslandPlaylist.add("Buena Vista Social Club - Murmullo");
    desertIslandPlaylist.add("A Tribe Called Quest - Electric Relaxation");
    /*
     * Check out your personally curated selection of music by printing
     * desertIslandPlaylist to the terminal. Then run your code.
     */
    for (String string : desertIslandPlaylist) {
      System.out.println(string);
    }

    /*
     * First, check the number of songs on your playlist using size(). Print the
     * number to the terminal.
     */
    System.out.println(desertIslandPlaylist.size());

    /*
     * Now, you’ll need to make some tough decisions. Remove songs from your
     * playlist using remove() until you only have five songs left.
     */
    desertIslandPlaylist.remove(0);

    /*
     * Use indexOf() to get the indices of the two songs you want to swap in
     * desertIslandPlaylist. (You can store these as variables or print them out.)
     */

    int indexA = desertIslandPlaylist.indexOf("Buena Vista Social Club - Murmullo");
    int indexB = desertIslandPlaylist.indexOf("A Tribe Called Quest - Electric Relaxation");

    /*
     * Create a new String variable called tempA and initialize it with the value of
     * song a.
     */
    String tempA = "Buena Vista Social Club - Murmullo";

    /*
     * Call set() on desertIslandPlaylist to rewrite the song at the index of a with
     * song b. (You’re adding song b where a was in the playlist.)
     */
    desertIslandPlaylist.set(indexA, "A Tribe Called Quest - Electric Relaxation");

    /*
     * Use set() again on desertIslandPlaylist. This time, give the original index
     * of song b the value of your temporary variable (which is really song a). In
     * other words, you’re putting song a where song b used to be.
     */
    desertIslandPlaylist.set(indexB, tempA);
    System.out.println(desertIslandPlaylist);

  }

}