const express = require('express');
const router = express.Router();

const apiRouter = require('./api'); // require the api routes

router.use('/api', apiRouter); // all URLS of routes will be prefixed with '/api'

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
