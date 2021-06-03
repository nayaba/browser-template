'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-in'
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    data: data,
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
