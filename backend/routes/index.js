const express = require('express');
const router = express.Router();

const apiRouter = require('./api'); // require the api routes

router.use('/api', apiRouter); // all URLS of routes will be prefixed with '/api'

module.exports = router;
