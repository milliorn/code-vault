// To create a new date instance, you can use the new Date() constructor.
const date = new Date();
console.log(date);

// toDateString(): This method converts the date portion of a Date object into a human-readable string format.
console.log(date.toDateString());

// toISOString(): This method converts a Date object into a string representation following the ISO 8601 format.
console.warn(date.toISOString());

// toLocaleDateString(): This method returns a string representing the date portion of a Date object using the system's local conventions.
console.warn(date.toLocaleDateString());

// String Concatenation: One approach is to manually concatenate the different components of a date using string manipulation.
let formattedDate = `${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;

console.log(formattedDate);

// Intl.DateTimeFormat: JavaScript's Intl object offers powerful formatting capabilities through the DateTimeFormat object. It provides localization support and various options to format dates and times.
let formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "short" });
formattedDate = formatter.format(date);
console.log(formattedDate);

// How to Handle Time Zones When Working with Dates
formattedDate = date.toLocaleString("en-US", {
  timeZoneName: "short",
});

console.log(formattedDate);

// Specific Date Format: To display a date in a specific format, such as DD/MM/YYYY, you can use Intl.DateTimeFormat with the appropriate options.
formatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

formattedDate = formatter.format(date);
console.log(formattedDate);

// Time Format: To format the time portion of a date, you can use the hour, minute, and second options.
formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const formattedTime = formatter.format(date);
console.log(formattedTime);
