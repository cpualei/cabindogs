// import required packages
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// check environment key in config file to
    // determine if environment is in production
const { environment } = require('./config');
const isProduction = environment === 'production';

// initialize express app
const app = express();

// morgan middleware for logging info about
    // requests and responses
app.use(morgan('dev'));

// middleware for parsing cookies and JSON bodies
    // with Content-Type of 'application/json'
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );

  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );
