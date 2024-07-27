// A function to fetch a resource from a given URL using Promises
export function fetchResource(url) {
  // Return a new Promise that wraps the fetch operation
  return new Promise((resolve, reject) => {
    // Use fetch to make the HTTP request to the provided URL
    fetch(url)
      .then((response) => {
        // Check if the response is not okay (e.g., status code other than 200)
        if (!response.ok) {
          // If not okay, reject the Promise with an error message
          reject(`Error: ${response.status}`);
        }
        // If the response is okay, read the content as text
        return response.text();
      })
      .then((result) => {
        // After reading the content, resolve the Promise with the result
        resolve(result);
      })
      .catch((error) => {
        // If any error occurs during the process, catch it and reject the Promise with an error message
        reject(`Error: ${error}`);
      });
  });
}
