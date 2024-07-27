// Code: Promise that resolves or rejects randomly
export const mathPromise = new Promise((resolve, reject) => {
  const num = Math.random(); // Generate a random number between 0 and 1
  if (num < 0.5) {
    resolve(`Promise is fulfilled! Value: ${num}`);
  }
  else {
    reject(`Promise is rejected! Value: ${num}`);
  }
});
