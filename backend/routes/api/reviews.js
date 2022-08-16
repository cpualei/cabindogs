const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Review } = require("../../db/models");
const router = express.Router();

router.get(
  "/",
//   requireAuth,
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
  })
);

module.exports = router;
