import java.util.Random;

/*
Write a comment near the top of the program that describe what the program does.
*/
public class Continents {
	public static void main(String[] args) {
		/*
		 * Create an int variable called continent and set it equal to 4.
		 */
		Random random = new Random();
		int continent = random.nextInt(7);

		/*
		 * Create a switch statement that will switch based on the value of continent.
		 * Inside of the switch statement, add a case that will run when the value of
		 * continent is 1.
		 * 
		 * When the value of continent is 1, print out North America: Mexico City,
		 * Mexico.
		 * 
		 * Make sure the next line exits out of the case.
		 * 
		 * Add another case that will run when the value of continent is 2. When this
		 * value is met, print out South America: Sao Paulo, Brazil.
		 * 
		 * Make sure the next line exits out of the case.
		 * 
		 * Add another case that will run when the value of continent is 3. When this
		 * value is met, print out Europe: Moscow, Russia. Make sure the next line exits
		 * out of the case.
		 * 
		 * Add another case that will run when the value of continent is 4. When this
		 * value is met, print out Africa: Lagos, Nigeria. Make sure the next line exits
		 * out of the case.
		 *
		 * Add another case that will run when the value of continent is 5. When this
		 * value is met, print out Asia: Shanghai, China. Make sure the next line exits
		 * out of the case.
		 * 
		 * Add another case that will run when the value of continent is 6. When this
		 * value is met, print out Australia: Sydney, Australia. Make sure the next line
		 * exits out of the case.
		 * 
		 * Add another case that will run when the value of continent is 7. When this
		 * value is met, print out Antarctica: McMurdo Station, US. Make sure the next
		 * line exits out of the case.
		 * 
		 * Finally, add the default case. The default case should print out Undefined
		 * continent! Make sure the next line exits out of the case.
		 * 
		 */
		switch (continent) {
			case 1:
				System.out.println("North America: Mexico City, Mexico");
				break;
			case 2:
				System.out.println("South America: Sao Paulo, Brazil");
				break;
			case 3:
				System.out.println("Europe: Moscow, Russia");
				break;
			case 4:
				System.out.println("Africa: Lagos, Nigeria");
				break;
			case 5:
				System.out.println("Asia: Shanghai, China");
				break;
			case 6:
				System.out.println("Australia: Sydney, Australia");
				break;
			case 7:
				System.out.println("Antarctica: McMurdo Station, US");
				break;
			default:
				System.out.println("Undefined continent!");
				break;
		}
	}
}