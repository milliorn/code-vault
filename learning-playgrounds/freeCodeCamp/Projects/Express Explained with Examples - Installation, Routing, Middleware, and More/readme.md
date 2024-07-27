# Express Explained with Examples - Installation, Routing, Middleware, and More

https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/

## Project Structure of an Express App

```
project-root/
   node_modules/          // This is where the packages installed are stored
   config/
      db.js                // Database connection and configuration
      credentials.js       // Passwords/API keys for external services used by your app
      config.js            // Environment variables
   models/                 // For mongoose schemas
      books.js
      things.js
   routes/                 // All routes for different entities in different files
      books.js
      things.js
   views/
      index.pug
      404.pug
        ...
   public/                 // All static files
      images/
      css/
      javascript/
   app.js
   routes.js               // Require all routes in this and then require this file in
   app.js
   package.json
```

This is pattern is commonly known as MVC, model-view-controller. Simply because our database model, the UI of the application and the controllers (in our case, routes) are written and stored in separate files. This design pattern that makes any web application easy to scale if you want to introduce more routes or static files in the future and the code is maintainable.
