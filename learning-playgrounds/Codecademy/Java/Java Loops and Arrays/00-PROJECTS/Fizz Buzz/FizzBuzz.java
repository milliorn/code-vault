class FizzBuzz {
    /*
     * Start by creating a skeleton for the program:
     */
    public static void main(String[] args) {
        /*
         * Write a for loop that starts at 1 and iterates to 100.
         */
        for (int i = 1; i <= 100; ++i) {
            /*
             * Inside the for loop, output the counter i.
             *
             * How do we check whether or not a number is divisible by 3? What about for the
             * other two conditions?
             */
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}
