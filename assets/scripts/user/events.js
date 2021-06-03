'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  api.signUp(getFormFields(event.target))
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

module.exports = {
  onSignUp
}
