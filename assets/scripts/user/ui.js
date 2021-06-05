'user strict'
const store = require('./../store.js')

const signUpSuccess = function (res) {
  $('#messaging').text('Sign up successful')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-div').hide()
  $('#sign-in-div').show()
}
const signUpFail = function () {
  $('#messaging').text('Sign up failed')
}

const signInSuccess = function (res) {
  $('#sign-in-div').hide()
  $('#after-sign-in').show()
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
  $('#sign-in-div').show()
  $('#after-sign-in').hide()
}
const signOutFail = function () {
  $('#messaging').text('Failed to sign out')
}

const signUpLinkSuccess = function () {
  $('#sign-up-div').show()
  $('#sign-in-div').hide()
}
const signInLinkSuccess = function () {
  $('#sign-up-div').hide()
  $('#sign-in-div').show()
}

// const forgotPasswordLinkSuccess = function () {
//   $('#change-password-div').show()
// }
// const forgotPasswordLinkFail = function () {
//   $('#messaging').text('You must be logged in to change your password')
// }

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  signUpLinkSuccess,
  signInLinkSuccess
  // forgotPasswordLinkSuccess,
  // forgotPasswordLinkFail
}
