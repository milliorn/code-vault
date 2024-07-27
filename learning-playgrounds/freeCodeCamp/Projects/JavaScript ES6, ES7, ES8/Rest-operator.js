function add(...num) {
  return num.reduce((prev, curr) => prev + curr, 0);
}

console.log(add(1, 2, 3, 4));
