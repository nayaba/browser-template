'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createEntry = function (data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/create-entry',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const indexEntries = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entries',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createEntry,
  indexEntries
}
