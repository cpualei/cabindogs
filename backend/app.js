// import required packages
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

// check environment key in config file to
    // determine if environment is in production
const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express(); // initialize express app

app.use(morgan('dev')); // morgan middleware for logging info about requests and responses
app.use(cookieParser()); // middleware for parsing cookies
app.use(express.json()); // middleware for parsing JSON bodies with content-type 'application/json'

// Security Middleware
if (!isProduction) {
    app.use(cors()); // enable cors only in development
}

app.use(
    helmet.crossOriginResourcePolicy({ // helmet helps set a variety of headers to better secure your app
      policy: "cross-origin"
    })
  );

app.use(
csurf({  // Set the _csrf token and create req.csrfToken method
    cookie: {
    secure: isProduction,
    sameSite: isProduction && "Lax",
    httpOnly: true
    }
})
);

app.use(routes);

module.exports = app;
