import { fetchAllResources } from "./fetchAllResources.js";
import { fetchResource } from "./fetchResource.js";
import { mathPromise } from "./mathPromise.js";

// URLs of three resources we want to fetch
const urlsToFetch = [
  'https://www.example2.com',
  'https://www.example3.com'
];
// Call the fetchResource function with a URL
fetchResource('https://www.example.com')
// Call the fetchAllResources function with the array of URLs
fetchAllResources(urlsToFetch);

// Code: Promise that resolves or rejects randomly
mathPromise.then((result) =>
  console.log(result)
    .catch((error) =>
      console.log(error)));

let promise1 = Promise.resolve("Promise 1 resolved");
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Promise 2 resolved"));
let promise3 = new Promise((resolve) => setTimeout(resolve, 1000, "Promise 3 rejected"));

Promise.all([ promise1, promise2, promise3 ])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

promise1 = Promise.resolve(`First Promise's Value`);
promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, `First reason for rejection`)
);
promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 3000, `Second reason for rejection`)
);

Promise.all([ promise1, promise2, promise3 ])
  .then((values) => {
    values.forEach((value) => console.log(value));
  })
  .catch((error) => console.log(error));

promise1 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `First Promise's Value`)
);
promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Second Promise's Value`)
);
promise3 = Promise.resolve(`Third Promise's Value`);

Promise.race([ promise1, promise2, promise3 ])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

promise1 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `First Promise's Value`)
);
promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Second Promise's Value`)
);
promise3 = Promise.reject(`Third Promise's Value`);

Promise.any([ promise1, promise2, promise3 ])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

promise1 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `First Promise's Value`)
);
promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Second Promise's Value`)
);
promise3 = Promise.reject(`Third Promise's Value`);

Promise.allSettled([ promise1, promise2, promise3 ])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => console.log(result));

