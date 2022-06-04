const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { User, Listing } = require("../../db/models");

const router = express.Router();


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
      include: { model: User },
    });
    return res.json(listing);
  })
);

router.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { name, state, country, cost, img1, img2, img3, img4, img5 } = req.body;
    const listing = await Listing.findByPk(req.params.id);

    await listing.update({
      name,
      state,
      country,
      cost,
      img1,
      img2,
      img3,
      img4,
      img5
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
