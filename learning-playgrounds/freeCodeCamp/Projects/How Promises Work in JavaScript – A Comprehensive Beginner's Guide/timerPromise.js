export const timerPromise = (message) => new Promise((resolve, reject) => setTimeout(resolve, 2000, message))
  .catch((error) => console.log(error));
