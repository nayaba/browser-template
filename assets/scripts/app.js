'use strict'

const userEvents = require('./user/events')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-button').on('click', userEvents.onSignOut)
})
