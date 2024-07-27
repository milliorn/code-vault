/*
BROWSER COMPATIBILITY AND TRANSPILATION

npm init

In the last exercise, you wrote one command in your terminal to transpile ES6 code to ES5. In the next five exercises you will learn how to setup a JavaScript project that transpiles code when you run npm run build from the root directory of a JavaScript project.

The first step is to place your ES6 JavaScript file in a directory called src. From your root directory, the path to the ES6 file is ./src/main.js

The initial JavaScript project file structure is:

project
|_ src
|___ main.js

Before we install Babel, we need to setup our project to use the node package manager (npm). Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.

Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.

A package.json file contains information about the current JavaScript project. Some of this information includes:

Metadata — This includes a project title, description, authors, and more.

A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.

Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.

The terminal prompts you to fill in fields for the project’s metadata (name, description, etc.)

You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. If you don’t want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave them empty when it creates the package.json file.

After you run npm init your directory structure will contain the following files and folders:

project
|_ src
|___ main.js
|_ package.json
npm adds the package.json file to the same level as the src directory.
*/



