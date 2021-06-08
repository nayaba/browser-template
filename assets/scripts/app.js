'use strict'

const userEvents = require('./user/events')
const resourceEvents = require('./resource/events')

$(() => {
  // hide everything except for sign in
  $('#after-sign-in').hide()
  $('#sign-up-div').hide()
  $('#nav').hide()
  $('#change-password-div').hide()
  $('#index-entry-div').hide()

  // click on sign up link to show sign up div and hide sign in div
  $('#sign-up-link').on('click', userEvents.onSignUpLink)
  $('#sign-in-link').on('click', userEvents.onSignInLink)
  $('#forgot-password-link').on('click', userEvents.onForgotPasswordLink)

  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#change-password-nav-button').on('click', userEvents.onNavChangePassword)
  $('#create-entry-nav-button').on('click', resourceEvents.onNavCreateEntry)
  $('#index-entry-nav-button').on('click', resourceEvents.onNavIndexEntries)

  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)

  $('#create-entry-form').on('submit', resourceEvents.onCreateEntry)
  $('#index-entries-button').on('click', resourceEvents.onIndexEntries)
  $('#show-entry-form').on('submit', resourceEvents.onShowEntry)

  $('#entries-div').on('submit', '.dynamic-update-entry', resourceEvents.onUpdateEntry)
  $('#entries-div').on('click', '.dynamic-delete-entry', resourceEvents.onDynamicDeleteEntry)

  $('#modal-01-body').on('submit', '.modal-update-entry', resourceEvents.onDynamicUpdateEntry)
})
