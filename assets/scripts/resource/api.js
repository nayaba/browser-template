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
    url: config.apiUrl + '/entries/date',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showEntry = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/entries/${store.entries._id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateEntry = function (data) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/entries/${store.entries._id}`,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createEntry,
  indexEntries,
  showEntry,
  updateEntry
}
