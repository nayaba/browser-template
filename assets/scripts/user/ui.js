'user strict'
const store = require('./../store.js')

const signUpSuccess = function (res) {
  $('#messaging').text('Sign up successful')
}
const signUpFail = function () {
  $('#messaging').text('Sign up failed')
}

const signInSuccess = function (res) {
  $('#messaging').text('Sign in successful')
  store.user = res.user
}
const signInFail = function () {
  $('#messaging').text('Sign in failed')
}

const changePasswordSuccess = function () {
  $('#messaging').text('Successfully changed password')
}
const changePasswordFail = function () {
  $('#messaging').text('Failed to change password')
}

const signOutSuccess = function () {
  $('#messaging').text('Successfully signed out')
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
