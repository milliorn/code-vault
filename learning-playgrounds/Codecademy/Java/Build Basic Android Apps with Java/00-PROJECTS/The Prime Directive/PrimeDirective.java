import java.util.ArrayList;

class PrimeDirective {

    // Add your methods here:

    // Create an empty public method isPrime() that:
    // has one parameter: an int called number
    // will return true if number is prime
    // will return false if number is not prime

    public boolean isPrime(int number) {
        if (number == 2) {
            return true;
        }

        if (number <= 1 || number % 2 == 0) {
            return false;
        }

        for (int x = 3; x * x <= number; x += 2) {
            if (number % x == 0) {
                return false;
            }
        }

        return true;
    }

    // You can create another method to handle this. Build an empty method called
    // onlyPrimes() that:
    // returns an ArrayList of integers
    // has a parameter numbers, which is an array of ints
    // Inside the onlyPrimes() body, create a new empty ArrayList called primes to
    // store all the prime numbers that are found.
    // Set up a for-each loop that checks each number in numbers.
    // Now, if number is prime, you can add it to primes.

    public ArrayList<Integer> onlyPrimes(int[] numbers) {
        ArrayList<Integer> primes = new ArrayList<Integer>();

        for (int number : numbers) {
            if (isPrime(number)) {
                primes.add(number);
            }
        }

        return primes;
    }

    public static void main(String[] args) {

        PrimeDirective pd = new PrimeDirective();
        int[] numbers = { 6, 29, 28, 33, 11, 100, 101, 43, 89 };

        // Test out your isPrime() method on pd in main() and see if it works!

        System.out.println(pd.isPrime(7));
        System.out.println(pd.isPrime(28));
        System.out.println(pd.isPrime(2));
        System.out.println(pd.isPrime(0));

        // In main(), test out pd.onlyPrimes() on the numbers array.
        System.out.println(pd.onlyPrimes(numbers));
    }
}