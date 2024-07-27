function paint(color) {
  const circle = document.getElementById("circleID");
  circle.style = `background-color:${color}`;
}

function random() {
  const circle = document.getElementById("circleID");
  // Generate three random integers between 0 and 255
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Construct a CSS color string with the random values
  circle.style = `background-color:rgb(${r}, ${g}, ${b})`;
}
