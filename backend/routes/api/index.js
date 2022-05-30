const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const newListingRouter = require('./newListing.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter);

router.use('/newlisting', newListingRouter);

module.exports = router;
