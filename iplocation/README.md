# iplocation

[![pages-build-deployment](https://github.com/milliorn/iplocation/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/milliorn/iplocation/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/milliorn/iplocation/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/milliorn/iplocation/actions/workflows/github-code-scanning/codeql)

This repository contains a website that displays your IP address and geolocation information. It is built using React and utilizes various libraries and APIs to fetch and display the data.

## Demo

You can check out the live IP location website [here](https://milliorn.github.io/iplocation).

## Features

- Display the user's IP address and geolocation information
- Fetch IP address data from the ipify API
- Fetch geolocation data from the ipapi API
- Use Axios for making HTTP requests
- Retry failed requests using axios-retry
- Create typewriter effect for displaying text
- Built with TypeScript
- Deployed using GitHub Pages

## Installation

To run the iplocation website locally, follow these steps:

1. Clone the repository
2. Navigate to the project directory: `cd iplocation`
3. Install the dependencies: `npm install`

## Usage

### Development Server

To start the development server, use the following command `npm start`

This will launch the website at `http://localhost:3000`.

### Production Build

To build the website for production, use the following command `npm run build`

This will create a production-ready build in the `build` folder.

### Deploy

To deploy the website to GitHub Pages, use the following command `npm run deploy`

This will deploy the website to the URL specified in the `homepage` field of the `package.json` file.

## Technologies Used

- React
- Axios
- ipify API
- ipapi API
- axios-retry
- typewriter-effect
- TypeScript

## Dependencies

- [axios](https://github.com/axios/axios) - Promise-based HTTP client for making API requests
- [axios-retry](https://github.com/softonic/axios-retry) - Axios plugin for retrying failed requests
- [react-uuid](https://www.npmjs.com/package/react-uuid) - Library for generating unique IDs in React
- [typewriter-effect](https://www.npmjs.com/package/typewriter-effect) - Library for creating typewriter-like text animations

## Contributing

Contributions are welcome! If you'd like to contribute to the iplocation project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request to the `main` branch of the original repository.

Please ensure that your code follows the project's coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
