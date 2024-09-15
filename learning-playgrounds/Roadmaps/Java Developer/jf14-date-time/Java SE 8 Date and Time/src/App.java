import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;
import java.time.OffsetTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;

public class App {
    public static void main(String[] args) throws Exception {
        LocalDateTime timePoint = LocalDateTime.now(); // The current date and time
        LocalDate.of(2012, Month.DECEMBER, 12); // from values
        LocalDate.ofEpochDay(150); // middle of 1970
        LocalTime.of(17, 18); // the train I took home today
        LocalTime.parse("10:15:30"); // From a String

        System.err.println(timePoint);

        LocalDate theDate = timePoint.toLocalDate();
        Month month = timePoint.getMonth();
        int day = timePoint.getDayOfMonth();
        timePoint.getSecond();

        System.out.println(theDate);
        System.out.println(month);
        System.out.println(day);

        // Set the value, returning a new object
        LocalDateTime thePast = timePoint.withDayOfMonth(
                10).withYear(2010);

        /*
         * You can use direct manipulation methods,
         * or pass a value and field pair
         */
        LocalDateTime yetAnother = thePast.plusWeeks(
                3).plus(3, ChronoUnit.WEEKS);

        System.out.println(thePast);
        System.out.println(yetAnother);

        ZoneOffset offset = ZoneOffset.of("+2");

        OffsetTime time = OffsetTime.now();
        // changes offset, while keeping the same point on the timeline
        OffsetTime sameTimeDifferentOffset = time.withOffsetSameInstant(
                offset);
        // changes the offset, and updates the point on the timeline
        OffsetTime changeTimeWithNewOffset = time.withOffsetSameLocal(
                offset);
        // Can also create new object with altered fields as before
        changeTimeWithNewOffset
                .withHour(3)
                .plusSeconds(2);

        System.out.println(time);
        System.out.println(sameTimeDifferentOffset);

        Duration duration = Duration.ofSeconds(3, 5);

        System.out.println(duration);
    }
}
