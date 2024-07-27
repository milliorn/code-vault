/*
BROWSER COMPATIBILITY AND TRANSPILATION

Babel Source Lib

There’s one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...

In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

In the "scripts" object above, we add a property called "build". The property’s value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let’s consider each argument in the method call:

babel — The Babel command call responsible for transpiling code.

src — Instructs Babel to transpile all JavaScript code inside the src directory.

-d — Instructs Babel to write the transpiled code to a directory.

lib — Babel writes the transpiled code to a directory called lib.

In the next exercise, we’ll run the babel src -d lib method to transpile our ES6+ code.
*/


{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

