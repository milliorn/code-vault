import { fetchResource } from "./fetchResource.js";

// Function to fetch all resources one by one using fetchResource function and handle the results
export function fetchAllResources(urls) {
  // Create an array to store the results of each fetch
  const results = [];

  // Iterate through each URL in the input array and fetch the resources one by one
  urls.reduce((prevPromise, url) => {
    return prevPromise.then(() => {
      // Use fetchResource function to fetch the current URL
      return fetchResource(url)
        .then((result) => {
          // When a resource is fetched successfully, add its content to the results array
          results.push(result);
        })
        .catch((error) => {
          // If any error occurs during the process, catch it and log the error message
          console.log(error);
        });
    });
  }, Promise.resolve())
    .then(() => {
      // After all resources are fetched, log their contents
      results.forEach((result, index) => {
        console.log(`Resource ${index + 1} found: ${result}`);
      });
    });
}
