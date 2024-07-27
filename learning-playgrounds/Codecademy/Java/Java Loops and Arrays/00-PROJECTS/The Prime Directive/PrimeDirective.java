
// Import statement:
import java.util.ArrayList;

class PrimeDirective {
    // Add your methods here:
    public static void main(String[] args) {
        /*
         * Inside main(), an instance of PrimeDirective (pd) has been instantiated.
         * Below that, you’ll see an int array called numbers that has a series of
         * integers.
         */
        PrimeDirective pd = new PrimeDirective();
        int[] numbers = { 6, 29, 28, 33, 11, 100, 101, 43, 89, 7, 2, 0 };

        for (int i : numbers) {
            boolean trueFalse = isPrime(i);
            System.out.println("Is " + i + " a prime number? " + trueFalse);
        }

        /*
         * In main(), test out pd.onlyPrimes() on the numbers array.
         */
        System.out.println(pd.onlyPrimes(numbers));
    }

    /*
     * Create an empty public method isPrime() that: has one parameter: an int
     * called number will return true if number is prime will return false if number
     * is not prime.
     */
    private static boolean isPrime(int number) {
        /*
         * Imagine we have a number n. If n is prime, then n should not be divisible by
         * any integers between 2 and n-1.
         * 
         * Inside isPrime(), create a for loop set a counter i equal to 2 run the loop
         * while i is less than number increment i
         * 
         * As you loop through each i value, you want to check if number is divisible by
         * it. Inside the loop check if number is divisible by i. If it is, then number
         * is not prime, so you can return false from the method.
         * 
         * In isPrime() above the for loop, build an if/else if statement to handle the
         * following edge cases:
         * 
         * If number is 2, it is the smallest prime number. If number is less than 2, it
         * is not prime.
         */
        if (number == 2) {
            return true;
        } else if (number < 2) {
            return false;
        }

        for (int i = 2; i < number; ++i) {
            if (number % i == 0) {
                return false;
            }
        }
        /*
         * Below the for loop, return true because number isn’t divisible by any two
         * smaller integers.
         */
        return true;
    }

    /*
     * You can create another method to handle this. Build an empty method called
     * onlyPrimes() that:
     */
    private ArrayList<Integer> onlyPrimes(int[] numbers) {
        // method body goes here
        ArrayList<Integer> primes = new ArrayList<>();

        /*
         * Set up a for-each loop that checks each number in numbers.
         */
        for (Integer integer : numbers) {
            if (isPrime(integer)) {
                primes.add(integer);
            }
        }

        /*
         * At the end of the method below the for-each loop, return primes from
         * onlyPrimes().
         */
        return primes;
    }
}