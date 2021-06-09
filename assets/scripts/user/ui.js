'user strict'
const store = require('./../store.js')

const signUpSuccess = function (res) {
  $('#modal-01-body').html('Successfully signed up! Please sign in to get started.')
  $('#modal-01').modal('show')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-div').hide()
  $('#sign-in-div').show()
}
const signUpFail = function () {
  $('#modal-01-body').html('Sign up failed')
  $('#modal-01').modal('show')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  $('#sign-in-div').hide()
  $('#nav').show()
  $('#after-sign-in').show()
  store.user = res.user
  document.getElementById('entry-owner').value = store.user._id
  $('#sign-in-form').trigger('reset')

  $('#modal-01-header').html('Successfully signed in!')
  $('#modal-01-body').html(`<p>Get started with your digital bullet journal by creating your first entry.
  Be sure to label your entry with one of the symbols in your key:</p>
  <ul>
  <li><span class="entry-symbol">-</span> a note</li>
  <li><span class="entry-symbol">*</span> a task</li>
  <li><span class="entry-symbol">+</span> an event</li>
  <li><span class="entry-symbol">></span> a task to do later</li>
  </ul>
  `)
  $('#modal-01').modal('show')
}
const signInFail = function () {
  $('#modal-01-body').html('Sign in failed')
  $('#modal-01').modal('show')
}

const changePasswordSuccess = function () {
  $('#modal-01-body').html('Successfully changed password')
  $('#modal-01').modal('show')
  $('#change-password-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}
const changePasswordFail = function () {
  $('#modal-01-body').html('Failed to change password')
  $('#modal-01').modal('show')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#modal-01-body').html('Successfully signed out')
  $('#modal-01').modal('show')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')

  $('#after-sign-in').hide()

  $('#change-password-div').hide()
  $('#create-entry-div').hide()
  $('#entries-div-container').hide()
  $('#index-entry-div').hide()
  $('#entries-div-container').html('')
  $('#entries-div-container').trigger('reset')

  $('#sign-in-div').show()
}
const signOutFail = function () {
  $('#modal-01-body').html('Failed to sign out')
  $('#modal-01').modal('show')
}

const signUpLinkSuccess = function () {
  $('#sign-up-div').show()
  $('#sign-in-div').hide()
}
const signInLinkSuccess = function () {
  $('#sign-up-div').hide()
  $('#sign-in-div').show()
}

const navChangePassword = function () {
  $('#change-password-div').show()
  $('#create-entry-div').hide()
  $('#entries-div-container').hide()
  $('#show-entry-div').hide()
  $('#index-entry-div').hide()
  $('#entries-div-container').html('')
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
  signInLinkSuccess,
  navChangePassword
  // forgotPasswordLinkSuccess,
  // forgotPasswordLinkFail
}
