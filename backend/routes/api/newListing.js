const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { Listing } = require("../../db/models");

const router = express.Router();

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const newListing = await Listing.create(req.body);
    return res.json(newListing);
  })
);

module.exports = router;
