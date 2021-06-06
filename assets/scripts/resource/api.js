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
    url: config.apiUrl + `/entries/${data.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateEntry = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/entries/${data.id}`,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteEntry = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/entries/${data.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const dynamicUpdateEntry = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/entries/' + id,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const dynamicDeleteEntry = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/entries/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createEntry,
  indexEntries,
  showEntry,
  updateEntry,
  deleteEntry,
  dynamicUpdateEntry,
  dynamicDeleteEntry
}
