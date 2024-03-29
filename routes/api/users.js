const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.get('/', (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
});

router.get('/current', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      email: req.user.email,
      layout: req.user.layout
    });
  });

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: "A user has already registered with this email" })
      } else {
        // Otherwise create a new user
        const newUser = new User({
          firstName: req.body.firstName,
          email: req.body.email,
          password: req.body.password,
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user._id, firstName: user.firstName }

                jwt.sign(payload, keys.secretOrKey,
                  // omitting expiresIn so user can stay logged in
                  // { expiresIn: 3600 }, (err, token) => {
                  {}, (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    })
                  })
              })
              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user._id,
              firstName: user.firstName,
            };

            jwt.sign(payload, keys.secretOrKey,
              // Tell the key to expire in one hour 
              // { expiresIn: 3600 }, (err, token) => {
              {}, (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})

router.patch('/layout', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
    debugger
    req.user.layout = {
      ...req.user.layout,
      ...req.body.layout
    }
    debugger
    req.user.save().then(user => res.json(user))
      .catch(err => console.log(err))
  })

module.exports = router;