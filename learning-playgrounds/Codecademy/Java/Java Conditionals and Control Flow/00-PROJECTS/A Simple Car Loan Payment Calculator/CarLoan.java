public class CarLoan {
    public static void main(String[] args) {
        /*
         * Create an int variable called carLoan and set it equal to 10000.
         * 
         * Next, create an int variable called loanLength and set it equal to 3. This
         * will represent a loan length of 3 years.
         * 
         * Now create an int variable called interestRate and set it equal to 5. This
         * will represent an interest rate of 5% on the loan.
         * 
         * Next, create an int variable called downPayment and set it equal 2000. This
         * will represent the down payment provided by a user for this car purchase.
         */
        int carLoan = 10000;
        int loanLength = 3;
        int interestRate = 5;
        int downPayment = 2000;
        /*
         * Let’s build in some requirements that would prevent a buyer from taking out
         * an invalid car loan. Write an if statement that checks whether the loan
         * length is less than or equal to zero or whether the interest rate is less
         * than or equal to zero.
         * 
         * Next, inside of the if statement, print out a helpful error message to the
         * user. For example, you can print out something like: Error! You must take out
         * a valid car loan.
         * 
         * What if the down payment is more than the price of the car? Add to the if
         * statement and use else if to check whether the down payment is greater than
         * or equal to the car loan.
         * 
         * Inside of the else if block, print out a helpful message to the user about
         * the down payment and car loan amounts. For example, you can print out
         * something like: The car can be paid in full.
         * 
         * Finally, if none of the previous Boolean expressions evaluate to true,
         * calculate the monthly payment in an else block.
         * 
         * Create an int variable called monthlyBalance and set it equal to
         * remainingBalance divided by months. This represents the monthly payment
         * without interest included.
         * 
         * The user needs to pay interest on the loan borrowed. Create an int variable
         * called interest and set it equal to the monthly balance times the interest
         * rate, divided all by 100.
         * 
         * Calculate the final monthly payment. Create an int variable called
         * monthlyPayment and set it equal to the monthly balance plus the interest.
         * 
         * On the next line, print out the monthly payment. If you correctly completed
         * this project, the console should print out 233 as the monthly payment.
         * 
         * 
         */
        if (loanLength <= 0 || interestRate <= 0) {
            System.out.println("Error! You must take out a valid car loan.");
        } else if (downPayment >= carLoan) {
            System.out.println("The car can be paid in full.");
        } else {
            int remainingBalance = carLoan - downPayment;
            int months = loanLength * 12;
            int monthlyBalance = remainingBalance / months;
            int interest = monthlyBalance * interestRate / 100;
            int monthlyPayment = monthlyBalance + interest;
            System.out.println(monthlyPayment);
        }
    }
}
