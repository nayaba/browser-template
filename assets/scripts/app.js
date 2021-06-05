'use strict'

const userEvents = require('./user/events')
const resourceEvents = require('./resource/events')

$(() => {
  // hide everything except for sign in
  $('#after-sign-in').hide()
  $('#sign-up-div').hide()

  // click on sign up link to show sign up div and hide sign in div
  $('#sign-up-link').on('click', userEvents.onSignUpLink)

  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)

  $('#create-entry-form').on('submit', resourceEvents.onCreateEntry)
  $('#index-entries-button').on('click', resourceEvents.onIndexEntries)
  $('#show-entry-form').on('submit', resourceEvents.onShowEntry)
  $('#update-entry-form').on('submit', resourceEvents.onUpdateEntry)
  $('#delete-entry-form').on('submit', resourceEvents.onDeleteEntry)
})
