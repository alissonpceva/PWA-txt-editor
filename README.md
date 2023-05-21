# Progressive Web Applications (PWA) Challenge: Text Editor

This project is a text editor web application that runs in the browser and meets the criteria of a Progressive Web Application (PWA). It utilizes data persistence techniques and offline functionality to provide a reliable and seamless user experience. The application is built using a client-server architecture and leverages IndexedDB for storing and retrieving data.

## User Story

As a developer, I want to create and access notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

## Acceptance Criteria

- The application should have a client-server folder structure.
- Running `npm run start` from the root directory should start up the backend and serve the client.
- JavaScript files should be bundled using webpack.
- Webpack plugins should generate an HTML file, service worker, and manifest file.
- The application should function correctly even when using next-gen JavaScript features.
- Opening the text editor should immediately create a database storage using IndexedDB.
- Entered content in the text editor should be automatically saved to IndexedDB when clicking off the DOM window.
- The saved content should be retrieved from IndexedDB when reopening the text editor.
- Clicking on the Install button should allow downloading the web application as an icon on the desktop.
- The web application should have a registered service worker using workbox.
- Static assets should be pre-cached upon loading, including subsequent pages and static assets.
- Proper build scripts for a webpack application should be included for deployment to Heroku.

## Installation and Usage

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run start` to start the application and serve the client.
4. Open the browser and navigate to the provided URL to access the text editor application.
5. Enter and save your notes or code snippets.
6. Enjoy the offline functionality and the ability to access your content even without an internet connection.

## Deployment

To deploy the application to Heroku, please refer to the Heroku Deployment Guide on [The Full-Stack Blog](https://www.example.com) for detailed instructions.

## Technologies Used

- Express.js
- IndexedDB
- Webpack
- Workbox
- HTML
- CSS
- JavaScript

## Credits

This project utilizes the following dependencies:

- express
- idb
- manifest
- if-env
- concurrently
- nodemon

## License

This project is licensed under the ISC License.

