// The scope of `random` is too loose
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

const event = getRandEvent();

// The scope of is too tight
const getTrainingDays = (events) => {
  var day;
  if (events === "Marathon") {
    day = 50;
  } else if (events === "Triathlon") {
    day = 100;
  } else if (events === "Pentathlon") {
    day = 200;
  }

  return day;
};

let days = getTrainingDays(event);

// The scope of `name` is too tight
const logEvent = (events) => {
  const name = "Nala";
  console.log(`${name}'s event is: ${events}`);
};

const logTime = (day) => {
  const name = "Nala";
  console.log(`${name}'s time to train is: ${day} days`);
};

logEvent(event);
logTime(days);
