'use strict'

const userEvents = require('./user/events')
const resourceEvents = require('./resource/events')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)

  $('#create-entry-form').on('submit', resourceEvents.onCreateEntry)
  $('#index-entries-button').on('click', resourceEvents.onIndexEntries)
  $('#show-entry-form').on('submit', resourceEvents.onShowEntry)
  $('#update-entry-form').on('submit', resourceEvents.onUpdateEntry)
})
