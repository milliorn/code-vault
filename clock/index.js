const displayClock = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const getDayOfWeek = weekday[ date.getDay() ];

  let amPm = "AM";
  let dayOfMonth = date.getDate();
  let getHour = date.getHours();
  let getMinutes = date.getMinutes();
  let getSeconds = date.getSeconds();

  if (getHour == 0) {
    getHour = 12;
  }

  if (getHour > 12) {
    getHour = getHour - 12;
    amPm = "PM";
  }

  if (getSeconds == 0) {
    getSeconds = "00";
  }

  if (getSeconds > 0 && getSeconds < 10) {
    getSeconds = `0${getSeconds}`;
  }

  if (getMinutes == 0) {
    getMinutes = "00";
  }
  if (getMinutes > 0 && getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }

  const getTime = `${getHour}:${getMinutes}:${getSeconds} ${amPm}`;

  document.querySelector(".clock").textContent = getTime;

  document.querySelector(".day").textContent = `${months[ date.getMonth() ]
    } ${dayOfMonth}, ${date.getFullYear()} `;


  document.querySelector(".getDayOfWeek").innerHTML = getDayOfWeek;

  // This updates the time
  setTimeout(displayClock);
};

displayClock();
