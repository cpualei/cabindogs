// this file will hold the resources for the route paths beginning with '/api/users'

const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        // if the user is successfully created,
        // call the setTokenCookie and return the JSON res with user info
        // if not, a sequelize validation error will be passed onto next
        // error handling middleware
        await setTokenCookie(res, user);

        return res.json({
            user
        });
  })
);


module.exports = router;
