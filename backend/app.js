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

app.use(routes); // enables routes

// catch unhandled requests and forward to error handler
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err); // next invoked with nothing means that error handlers
                    // defined after this middleware will NOT be invoked.
                    // otherwise, middleware after will be invoked.
  });

const { ValidationError } = require('sequelize');

// Process sequelize errors
app.use((err, _req, _res, next) => {
// check if error is a Sequelize error:
if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
}
next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
      title: err.title || 'Server Error',
      message: err.message,
      errors: err.errors,
      stack: isProduction ? null : err.stack
    });
  });

module.exports = app;
