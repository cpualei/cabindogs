const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { User, Listing } = require("../../db/models");

const router = express.Router();

const validateEditedListing = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Listing must have a name.")
    .isLength({ max: 50 })
    .withMessage("Listing cannot be longer than 50 characters."),
  check("state")
    .exists({ checkFalsy: true })
    .withMessage("Please select the state where listing is located."),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Please select the country where listing is located."),
  check("cost")
    .exists({ checkFalsy: true })
    .withMessage("Please provide the cost per day for your listing.")
    .isDecimal()
    .withMessage("Cost must be a number."),
  check("img1")
    .exists({ checkFalsy: true })
    .withMessage("Please upload an image for your listing."),
  check("img2")
    .exists({ checkFalsy: true })
    .withMessage("Please upload an image for your listing."),
  check("img3")
    .exists({ checkFalsy: true })
    .withMessage("Please upload an image for your listing."),
  check("img4")
    .exists({ checkFalsy: true })
    .withMessage("Please upload an image for your listing."),

  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const listings = await Listing.findAll();
    return res.json(listings);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const listing = await Listing.findByPk(req.params.id, {
      include: { model: User }
    });
    return res.json(listing);
  })
);

router.put(
  "/:id",
  requireAuth,
  validateEditedListing,
  asyncHandler(async (req, res) => {
    const { name, state, country, cost, img1, img2, img3, img4 } = req.body;
    const listing = await Listing.findByPk(req.params.id);

    await listing.update({
      name,
      state,
      country,
      cost,
      img1,
      img2,
      img3,
      img4
    });

    return res.json(listing);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deleteListing = await Listing.findByPk(id);
    await deleteListing.destroy();
    return res.json({ id });
  })
);

router.get(
  "/:id/book",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const booking = await Listing.findByPk(id);
    return res.json(booking);
  })
);



module.exports = router;
