const Validator = require('validator');
const validText = require('./valid-text');
const normalizeUrl = require('normalize-url')
const sanitizeUrl = require("@braintree/sanitize-url").sanitizeUrl;

const handleURL = (url) => {
  let sanitized = sanitizeUrl(url);
  let normalized = normalizeUrl(sanitized);
  return normalized;
}

module.exports = function validateLinkInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.url = validText(data.url) ? handleURL(data.url) : '';
  data.section = validText(data.section) ? data.section : '';

  // title
  if (!Validator.isLength(data.title, { min: 1, max: 100 })) {
    errors.title = 'Title must be between 1 and 100 characters';
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }
  // url
  if (!Validator.isURL(data.url)) {
    errors.url = 'Invalid url link'
  }
  if (Validator.isEmpty(data.url)) {
    errors.title = 'Link field is required';
  }
  // section
  if (!Validator.isLength(data.section, { min: 1, max: 50 })) {
    errors.section = 'Section must be between 1 and 50 characters'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};