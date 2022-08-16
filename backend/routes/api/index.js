const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const listingsRouter = require("./listings.js");
const newListingRouter = require("./newListing.js");
const bookingsRouter = require("./bookings.js");
const reviewsRouter = require("./reviews.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/listings", listingsRouter);

router.use("/newlisting", newListingRouter);

router.use("/bookings", bookingsRouter);

router.use("/reviews", reviewsRouter);

module.exports = router;
