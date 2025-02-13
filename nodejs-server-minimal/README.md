# Node.js Server Minimal

[![CodeQL](https://github.com/milliorn/nodejs-server-minimal/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/milliorn/nodejs-server-minimal/actions/workflows/github-code-scanning/codeql)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Node.js Server Minimal is a lightweight and minimalistic boilerplate for setting up a basic Node.js server. This repository aims to provide a starting point for backend developers to quickly create a server with essential functionalities.

## Features

The key features of this Node.js server boilerplate include:

- Basic server configuration with Express.
- Configurable port number for easy deployment.
- Error handling middleware for graceful error responses.
- JSON parsing middleware for handling request payloads.
- Routing setup for handling different HTTP requests.
- Simple and easy-to-understand code structure.

## Getting Started

To get started with the Node.js Server Minimal, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd nodejs-server-minimal`
3. Install the required dependencies: `npm install`
4. Start the server: `npm start`

The server will be running on the default port 3000. You can access it at `http://localhost:3000`. To change the port number, modify the `port` constant in the `server.js` file or inside `.env`.

## Project Structure

The project structure is organized as follows:

- `README.md`: Project documentation.
- `controllers/`: Houses controller functions that handle request processing (not included).
- `server.js`: The main server file that configures and starts the Express server.
- `middlewares/`: Holds middleware functions used in the request pipeline (not included).
- `models/`: Placeholder for database models (not included).
- `package.json`: Project configuration and dependencies.
- `routes/`: Contains route handlers for different HTTP endpoints (not included).
- `.env`: File to house enviromental variables in the backend (not included).

## Dependencies

The following dependencies are used in this project:

- Body-parser: Middleware for parsing JSON request bodies.
- Dotenv: Loads environment variables from a .env file into process.env.
- Express: A minimalistic web application framework for Node.js.
- Nodemon: Development dependency for automatically restarting the server during development.

## Contributing

Contributions to this repository are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
