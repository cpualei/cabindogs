// this file will hold the resources for the route paths beginning with '/api/session'

const express = require('express');
const asyncHandler = require('express-async-handler'); // will wrap async route handlers + custom middlewares

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Log in
router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    // if there is no user returned from the login static method,
      // create an error and invoke next error-handling middleware
    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    // if there is a user returned from the login static method
      // from the User model, call setTokenCookie and return JSON reponse w/ user info
    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

// Log out
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

// Restore session user
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);

module.exports = router;
