'user strict'
const store = require('./../store.js')

const signUpSuccess = function (res) {
  $('#messaging').text('Sign up successful')
  $('#sign-up-form').trigger('reset')
}
const signUpFail = function () {
  $('#messaging').text('Sign up failed')
}

const signInSuccess = function (res) {
  $('#messaging').text('Sign in successful')
  store.user = res.user
  document.getElementById('entry-owner').value = store.user._id
  $('#sign-in-form').trigger('reset')
}
const signInFail = function () {
  $('#messaging').text('Sign in failed')
}

const changePasswordSuccess = function () {
  $('#messaging').text('Successfully changed password')
  $('#change-password-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}
const changePasswordFail = function () {
  $('#messaging').text('Failed to change password')
}

const signOutSuccess = function () {
  $('#messaging').text('Successfully signed out')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}
const signOutFail = function () {
  $('#messaging').text('Failed to sign out')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
