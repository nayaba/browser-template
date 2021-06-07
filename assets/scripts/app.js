'use strict'

const userEvents = require('./user/events')
const resourceEvents = require('./resource/events')

$(() => {
  // hide everything except for sign in
  $('#after-sign-in').hide()
  $('#sign-up-div').hide()
  $('#nav').hide()
  $('#change-password-div').hide()

  // click on sign up link to show sign up div and hide sign in div
  $('#sign-up-link').on('click', userEvents.onSignUpLink)
  $('#sign-in-link').on('click', userEvents.onSignInLink)
  $('#forgot-password-link').on('click', userEvents.onForgotPasswordLink)
  $('#change-password-nav-button').on('click', userEvents.onNavChangePassword)

  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)

  $('#create-entry-form').on('submit', resourceEvents.onCreateEntry)
  $('#index-entries-button').on('click', resourceEvents.onIndexEntries)
  $('#show-entry-form').on('submit', resourceEvents.onShowEntry)

  $('#entries-div').on('submit', '.dynamic-update-entry', resourceEvents.onDynamicUpdateEntry)
  $('#entries-div').on('click', '.dynamic-delete-entry', resourceEvents.onDynamicDeleteEntry)
})
