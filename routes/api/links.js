const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Link = require('../../models/Link');
const validateLinkInput = require('../../validation/links');
const getMetaData = require('metadata-scraper');

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
  'jwt', { session: false }), async (req, res) => {
    const { errors, isValid } = validateLinkInput(req.body)
    if (!isValid) return res.status(400).json(errors)

    const metaData = await getMetaData(req.body.url)
    // remove undefined values
    Object.keys(metaData).forEach(k => {
      if (metaData[k] === undefined) delete metaData[k]
    })
    // get hostname
    const nUrl = new URL(req.body.url)

    const newLink = new Link({
      title: req.body.title,
      url: req.body.url,
      hostname: nUrl.hostname,
      section: req.body.section,
      linkIdx: req.body.linkIdx,
      user: req.body.user,
      metaData: metaData
    })

    newLink.save()
      .then(link => {
        const newLayout = Object.assign({}, req.user.layout);
        debugger
        if (newLayout[link.section]) {
          newLayout[link.section].links[link._id] =
            newLayout[link.section].links.length;
        } else {
          newLayout[link.section] = {
            sectionIdx: Object.keys(newLayout).length,
            links: {
              [link._id]: 0
            }
          }
        }
        debugger
        req.user.layout = newLayout;
        req.user.save();
        res.json(link);
      })
      .catch(err => console.log(err))
  })

router.delete('/:id', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
    Link.findById(req.params.id).then(link => {
      if (req.user.id !== link.user.toString()) {
        res.status(400).json({ notallowed: 'User not authorized to delete this Link' })
      } else {
        Link.deleteOne({ _id: req.params.id }).then(() => {
          res.status(200).json({
            id: req.params.id,
            success: 'Link deleted successfully'
          })
        })
      }
    })
      .catch(err => res.status(404).json({
        nolinksfound: 'No Link found with that id'
      }))
  });

router.patch('/:id', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
    Link.findById(req.params.id).then(async (link) => {
      const { errors, isValid } = validateLinkInput(req.body)
      if (!isValid) return res.status(400).json(errors)

      const { title, url, hostname, section, linkIdx } = req.body;

      if (url !== link.url) {
        const metaData = await getMetaData(req.body.url)
        Object.keys(metaData).forEach(k => {
          if (metaData[k] === undefined) delete metaData[k]
        })
        const nUrl = new URL(req.body.url)

        link.url = url;
        link.metaData = metaData;
        link.hostname - nUrl.hostname;
      }

      link.title = title || link.title;
      link.linkIdx = linkIdx || link.linkIdx;
      link.section = section || link.section;

      link.save().then(link => res.json(link).status(200))
    }).catch(err => res.status(400).json(err.message))
  });

router.patch('/:id/idx', passport.authenticate(
  'jwt', { session: false }), (req, res) => {
    Link.findById(req.params.id).then(link => {
      link.linkIdx = req.body.linkIdx;
      link.section = req.body.section;
      link.save().then(link => {
        res.json(link)
      })
    }).catch(err => res.json(err.message))
  });


module.exports = router;