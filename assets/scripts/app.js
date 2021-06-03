'use strict'

const userEvents = require('./user/events')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
})
