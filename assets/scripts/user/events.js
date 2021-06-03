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

const onSignIn = function (event) {
  event.preventDefault()
  api.signIn(getFormFields(event.target))
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut(event.target)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
