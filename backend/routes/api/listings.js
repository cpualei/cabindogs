const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator'); // check will be used with handleValidationErrors to validate req bodies
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateListing = [
    check('name')
      .exists({ checkFalsy: true })
      .withMessage('Listing must have a name.')
      .isLength({ max: 50 })
      .withMessage('Listing cannot be longer than 50 characters.'),
];

module.exports = router;
