const getRandomInt = (max) => Math.floor(Math.random() * max);

const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    case "saturday":
    case "sunday":
    default:
      return getRandomInt(7) + 6;
  }
};

const getActualSleepHours = () => {
  let result = 0;
  for (let index = 0; index < 7; index++) {
    result += getSleepHours("");
  }
  return result;
};

const getIdealSleepHours = () => 56;

const calculateSleepDebt = () => getActualSleepHours() - getIdealSleepHours();

if (getActualSleepHours() < getIdealSleepHours()) {
  console.log(
    "You got " +
      (getActualSleepHours() - getActualSleepHours()) +
      " hour(s) less sleep than you needed this week. Get some rest."
  );
}
