public class TransitCalculator {
    // Start by building a TransitCalculator class in TransitCalculator.java. The
    // class should include
    // A main() method to run the code.
    // A field to keep track of the number of days a person will be using the
    // transit system (up to 30 days).
    // A field to keep track of the number of individual rides the person expects to
    // take in that time.
    // The NYC transit system also offers reduced fare options for people with
    // disabilities and people who are at least 65 years old. Refactor the
    // TransitCalculator class so that it checks if the rider qualifies for reduced
    // fare and calculates the best reduced fare option if they do.

    int numberOfDays;
    int numberOfIndividualRides;
    boolean isDisabled;

    // The NYC transit system has three regular fare options:
    // Add variables or arrays to the class to keep track of these values.
    String[] fareOptions = { "Pay-per-ride", "7-day Unlimited", "30-day Unlimited" };
    double[] fares = { 2.75, 33.0, 127.0 };
    double[] disabledFares = { 1.35, 16.50, 63.50 };

    // Build a class constructor for TransitCalculator that accepts the number of
    // days and rides and sets the values for the corresponding fields.

    public TransitCalculator(int days, int rides, boolean disabled) {
        numberOfDays = days;
        numberOfIndividualRides = rides;
        isDisabled = disabled;
    }

    // Create a method unlimited7Price() with a double return type. The method
    // should return the overall price per ride of using the 7-day Unlimited option.
    public double unlimited7Price() {
        return isDisabled ? (Math.ceil(numberOfDays / 7.0) * disabledFares[1]) / numberOfIndividualRides
                : (Math.ceil(numberOfDays / 7.0) * fares[1]) / numberOfIndividualRides;
    }

    // Build a method getRidePrices() that will return an array of doubles. Inside
    // the method, you’ll need to calculate the price per ride for each fare option.
    // You should use the unlimited7Price() method to determine this value for the
    // 7-day Unlimited option.
    public double[] getRidePrices() {
        return isDisabled
                ? new double[] { disabledFares[0], unlimited7Price(), disabledFares[2] / numberOfIndividualRides }
                : new double[] { fares[0], unlimited7Price(), fares[2] / numberOfIndividualRides };
    }

    // Create a String method called getBestFare().
    // Inside the method, you should use the array of ride prices calculated with
    // getRidePrices() and at least one loop to determine:
    // the lowest price
    // the best (corresponding) fare method
    // At the end of the method, you should return a String that communicates the
    // findings.
    public String getBestFare() {

        double[] getRidePrices = getRidePrices();
        int bestFare = 0;

        for (int i = 0; i < getRidePrices.length; i++) {

            if (getRidePrices[i] < getRidePrices[bestFare]) {

                bestFare = i;
            }
        }

        double perRide = Math.round(getRidePrices[bestFare] * 100.0) / 100.0;
        String bestFareOption = fareOptions[bestFare];

        return "You should get the " + bestFareOption + " option at $" + perRide + " per ride.";
    }

    public static void main(String[] args) {
        TransitCalculator tc1 = new TransitCalculator(19, 20, false);
        System.out.println(tc1.unlimited7Price());
        System.out.println(tc1.getBestFare());

        System.out.println("");

        TransitCalculator tc2 = new TransitCalculator(22, 50, false);
        System.out.println(tc2.unlimited7Price());
        System.out.println(tc2.getBestFare());

        System.out.println("");

        TransitCalculator tc3 = new TransitCalculator(6, 14, false);
        System.out.println(tc3.unlimited7Price());
        System.out.println(tc3.getBestFare());

        TransitCalculator dtc1 = new TransitCalculator(19, 20, true);
        System.out.println(dtc1.unlimited7Price());
        System.out.println(dtc1.getBestFare());

        System.out.println("");

        TransitCalculator dtc2 = new TransitCalculator(22, 50, true);
        System.out.println(dtc2.unlimited7Price());
        System.out.println(dtc2.getBestFare());

        System.out.println("");

        TransitCalculator dtc3 = new TransitCalculator(6, 14, true);
        System.out.println(dtc3.unlimited7Price());
        System.out.println(dtc3.getBestFare());

    }
}