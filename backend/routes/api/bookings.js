const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Booking } = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll({
      where: {
        userId: {
          [Op.eq]: req.user.id,
        },
      },
    });
    return res.json(bookings);
  })
);

router.post(
  "/book",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, listingId, totalCost, startDate, endDate } = req.body;
    const newBooking = await Booking.create(req.body);
    // console.log(listingId)
    return res.json(newBooking);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deleteBooking = await Booking.findByPk(id);
    await deleteBooking.destroy();
    return res.json(id)
  })
);

module.exports = router;
