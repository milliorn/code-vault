/*
REQUESTS I

XHR GET Requests I
Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.

MDN Documentation: Extensible Markup Language (XML).

Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data.

Remember, we use GET to retrieve data from a source. Take a look at the boilerplate code in the diagram to see how to make an XHR GET request.

We’ll construct this template from scratch in a different exercise and walk through what each step does.


XHR GET Requests II

We are going to reconstruct XHR GET request boilerplate code step-by-step until we have written a complete GET request.
*/


//boilerplate code for an AJAX GET request using an XMLHttpRequest object.

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open('GET', url);

xhr.send();

