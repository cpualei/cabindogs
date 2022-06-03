const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator"); // check will be used with handleValidationErrors to validate req bodies
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { Booking } = require("../../db/models");

const { Op } = require("sequelize");

const router = express.Router();

const validateBooking = [
  check("totalCost")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm total cost."),
  check("startDate")
    .exists({ checkFalsy: true })
    .withMessage("Please select a start date."),
  check("endDate")
    .exists({ checkFalsy: true })
    .withMessage("Please select an end date."),

  handleValidationErrors,
];

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
  "/",
  requireAuth,
  validateBooking,
  asyncHandler(async (req, res) => {
    const newBooking = await Booking.create(req.body);
    return res.json(newBooking);
  })
);

module.exports = router;
