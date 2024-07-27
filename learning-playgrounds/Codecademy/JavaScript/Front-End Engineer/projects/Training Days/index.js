const getRandEvent = () => {
  // The scope of `random` is too loose
  const random = Math.floor(Math.random() * 2);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  return days;
};

// The scope of `name` is too tight
const logEvent = (name, event) => console.log(`${name}'s event is: ${event}`);

const logTime = (name, days) =>
  console.log(`${name}'s time to train is: ${days} days`);

const events = getRandEvent();
const days = getTrainingDays(events);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent("Nala", events);
logTime("Nala", days);
