const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Listing } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const listings = await Listing.findAll();
  return res.json(listings);
}));

// router.post('/', requireAuth, validateListing, asyncHandler(async (req, res) => {
//   const newListing = await Listing.create(req.body);
//   return res.json(newListing);
// }));

module.exports = router;
