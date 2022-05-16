const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLinkInput(data) {
  let errors = {};


  data.text = validText(data.title) ? data.title : '';
  data.text = validText(data.url) ? data.url : '';

  if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
    errors.title = 'Tweet must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isUrl) {
    errors.url = 'Invalid url link'
  }

  // if .isUrl does not work: 
  // function validURL(str) {
  //   var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  //     '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  //     '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  //     '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  //   return !!pattern.test(str);
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};