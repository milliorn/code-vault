let add = document.querySelector("#add");
let output;
let result;
let subract = document.querySelector("#subtract");

add.addEventListener("click", () => {
  output = document.querySelector("#output");
  result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0;
  }

  output.innerText = result;
});

subract.addEventListener("click", () => {
  output = document.querySelector("#output");
  result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});
