// Why Use Promises in JavaScript?

const posts = [
  { post_id: 1, post_title: 'First Post' },
  { post_id: 2, post_title: 'Second Post' },
  { post_id: 3, post_title: 'Third Post' },
];

const comments = [
  { post_id: 2, comment: 'Great!' },
  { post_id: 2, comment: 'Nice Post!' },
  { post_id: 3, comment: 'Awesome Post!' },
];

function getPostById(postId) { // getPostById is a function that returns a promise
  return new Promise((resolve, reject) => { // Promise constructor takes a callback function with two parameters resolve and reject
    setTimeout(() => { // setTimeout is used to simulate a time taking asynchronous process
      const post = posts.find((post) => post.post_id === postId); // find is used to get the object from an array which matches the given condition
      if (post) { // if post is found
        resolve(post); // calling resolve method to resolve the promise
      } else { // if post is not found
        reject('Post Not Found!'); // calling reject method to reject the promise
      }
    }, 1000); // simulating a delay of 1 second
  });
}

function getCommentsForPost(postId) { // getCommentsForPost is a function that returns a promise
  return new Promise((resolve, reject) => { // Promise constructor takes a callback function with two parameters resolve and reject
    setTimeout(() => { // setTimeout is used to simulate a time taking asynchronous process
      const comment = comments.filter((comment) => comment.post_id === postId); // filter is used to get an array of objects from an array which matches the given condition
      if (comment) { // if comments are found
        resolve(comment); // calling resolve method to resolve the promise
      } else { // if comments are not found
        reject('Comments Not Found!'); // calling reject method to reject the promise
      }
    }, 1000); // simulating a delay of 1 second
  });
}

getPostById(2) // calling getPostById function with postId as 2
  .then((post) => { // then method is called when the promise is resolved
    console.log(post); // logs the post object to the console
    return getCommentsForPost(post.post_id); // returning a promise from then method
  }
  )
  .then((comments) => console.log(comments)) // then method is called when the promise is resolved
  .catch((err) => console.log(err)); // catch method is called when the promise is rejected

// How to Create a Promise

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const sum = 4 + 5;
    resolve({
      a: 4,
      b: 5,
      sum
    });
  }, 2000);
});

// How to Consume a Promise

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// How to Create a Promise

function createPromise(a = 0, b = 0) { // createPromise is a function that returns a promise
  return new Promise(function (resolve, reject) { // Promise constructor takes a callback function with two parameters resolve and reject
    setTimeout(function () { // setTimeout is used to simulate a time taking asynchronous process
      const sum = a + b; // calculating sum
      if (isNaN(sum)) { // if sum is not a number
        reject('Error while calculating sum.'); // calling reject method to reject the promise
      } else { // if sum is a number
        resolve(sum); // calling resolve method to resolve the promise
      }
    }, 2000); // simulating a delay of 2 seconds
  });
}

createPromise(1, 8).then((result) => { // calling createPromise function with two parameters
  console.log(result); // logs the result to the console
}).catch((error) => { // catch method is called when the promise is rejected
  console.log(error); // logs the error to the console
});

function getProduct(a, b) { // getProduct is a function that returns a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * b); // calling resolve method to resolve the promise
    }, 1000); // simulating a delay of 1 second
  });
}

const printResult = async () => { // printResult is an async function
  try { // try block is used to handle errors
    const result = await getProduct(2, 4); // line 1
    const finalResult = await getProduct(result, 2); // line 2
    console.log('final_result', finalResult); // line 3
  } catch (error) { // catch block is used to handle errors
    console.log(error); // logs the error to the console
  }
};

printResult(); // calling printResult function

// The Promise.all method

const promise1 = new Promise((resolve, reject) => { // promise1 is a promise
  setTimeout(() => { // setTimeout is used to simulate a time taking asynchronous process
    resolve('Promise 1'); // calling resolve method to resolve the promise
  }, 2000); // simulating a delay of 2 seconds
});

const promise2 = new Promise((resolve, reject) => { // promise2 is a promise
  setTimeout(() => { // setTimeout is used to simulate a time taking asynchronous process
    resolve('Promise 2'); // calling resolve method to resolve the promise
  }, 1000); // simulating a delay of 1 second
});

Promise.all([ promise1, promise2 ]).then((result) => { // Promise.all method takes an array of promises as a parameter
  console.log(result); // logs the result to the console
}).catch((error) => { console.log(error); }); // catch method is called when the promise is rejected

// The Promise.race method

Promise.race([ promise1, promise2 ])
  .then((result) => { // then method is called when the promise is resolved
    console.log('resolved', result); // logs the result to the console
  })
  .catch((error) => { // catch method is called when the promise is rejected
    console.log('rejected', error); // logs the error to the console
  });

// The Promise.allSettled method

Promise.allSettled([ promise1, promise2 ])
  .then((result) => { // then method is called when the promise is resolved
    console.log('resolved', result); // logs the result to the console
  })
  .catch((error) => { // catch method is called when the promise is rejected
    console.log('rejected', error); // logs the error to the console
  });

// The Promise.any method

Promise.any([ promise1, promise2 ])
  .then((result) => { // then method is called when the promise is resolved
    console.log('resolved', result); // logs the result to the console
  })
  .catch((error) => { // catch method is called when the promise is rejected
    console.log('rejected', error); // logs the error to the console
  });
