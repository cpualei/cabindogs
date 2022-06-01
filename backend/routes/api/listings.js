const express = require("express");
const asyncHandler = require("express-async-handler");

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
    const listing = await Listing.findByPk(req.body.id, {
      include: { model: User }
    });
    return res.json(listing);
  })
);

// console.log('HITTING DELETE ROUTTE')
// router.delete(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const id = await Listing.deleteItem(req.params.id);
//     return res.json({ id });
//   })
// );

module.exports = router;
