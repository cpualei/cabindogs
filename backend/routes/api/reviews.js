const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Review } = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
  })
);

router.post(
  "/new-review",
  requireAuth,
  asyncHandler(async (req, res) => {
    const review = await Review.create(req.body);
    console.log(review)
    return res.json(review);
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deleteReview = await Review.findByPk(id);
    await deleteReview.destroy();
    return res.json(id);
  })
);

module.exports = router;
