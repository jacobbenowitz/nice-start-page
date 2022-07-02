const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Link = require('../../models/Link');
const validateLinkInput = require('../../validation/links')

router.get("/test", (req, res) =>
  res.json({ msg: "This is the links route" })
);

router.get('/', (req, res) => {
  Link.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ noLinksFound: "No Links found" }))
});

router.get('/user/:userId', (req, res) => {
  Link.find({ user: req.params.userId })
    .then(links => res.json(links))
    .catch(err => res.status(404).json({
      nolinksfound: 'No Links found for that user'
    }))
});

router.get('/:id', (req, res) => {
  Link.findById(req.params.id)
    .then(link => res.json(link))
    .catch(err => res.status(404).json({
      nolinksfound: 'No Link found with that id'
    }))
})

router.post('/', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateLinkInput(req.body)
  
  if (!isValid) return res.status(400).json(errors)

  const newLink = new Link({
    title: req.body.title,
    url: req.body.url,
    section: req.body.section,
    user: req.body.user,
  })

  newLink.save().then(link => res.json(link))
});

router.delete('/:id', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
    Link.findById(req.params.id).then(link => {
      if (req.user.id !== link.user) {
        res.status(400).json({ notallowed: 'User not authorized to delete this Link' })
      } else {
        Link.deleteOne({ _id: req.params.id }).then(() => {
          res.status(200).json({ success: 'Link deleted successfully' })
        })
      }
    })
    .catch(err => res.status(404).json({
      nolinksfound: 'No Link found with that id'
    }))
});

module.exports = router;