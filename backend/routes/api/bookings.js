const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { User, Booking } = require("../../db/models");

const { Op } = require('sequelize');

const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    // const user = User.findByPk(req.session.user.id)
    const bookings = await Booking.findAll({
        where: {
            userId: {
                [Op.eq]: req.user.id
            }
        }
    });
    return res.json(bookings);
  })
);

module.exports = router;
