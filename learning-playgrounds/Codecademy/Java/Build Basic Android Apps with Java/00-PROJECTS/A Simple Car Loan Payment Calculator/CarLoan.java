public class CarLoan {
    public static void main(String[] args) {
        // Create an int variable called carLoan and set it equal to 10000.
        int carLoan = 10000;

        // create an int variable called loanLength. set it equal to 3.
        int loanLength = 3;

        // create an int variable called interestRate. set it equal to 5.
        int interestRate = 5;

        // create an int variable called downPayment. set it equal 2000.
        int downPayment = 2000;

        // Write an if statement that checks whether the loan
        // length is less than or equal to zero or whether the interest rate is less
        // than or equal to zero.
        // inside of the if statement, print a error message to the user.
        // else if to check whether the down payment is greater than or equal to the car
        // loan.
        // print out a helpful message to the user about the down payment and car loan
        // calculate the monthly payment in an else block.
        // Inside of the else block, create an int variable called remainingBalance and
        // set it equal to carLoan minus downPayment.
        // create an int variable called months and set it
        // equal to loanLength times 12.
        // Create an int variable called monthlyBalance. set it equal to
        // remainingBalance divided by months.
        // Create an int variable called interest. set it equal to the monthly balance
        // times the interest rate, divided all by 100.
        // Create an int variable called monthlyPayment. set it equal to the monthly
        // balance plus the interest.
        // print out the monthly payment. the console should print out 233 as the
        // monthly payment.

        if (loanLength <= 0 || interestRate <= 0) {
            System.out.println("Error! You must take out a valid car loan.");
        } else if (downPayment >= carLoan) {
            System.out.println("Down payment exceeds the car loan.");
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