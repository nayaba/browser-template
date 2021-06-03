'use strict'
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  api.SignUp(getFormFields(event.target))
    .then()
    .catch()
}

module.exports = {
  onSignUp
}
