'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createEntry = function (data) {
  console.log('api create data: ', data)
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

const showEntry = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entries/' + id.id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const searchEntries = function (text) {
  console.log('api text: ', text)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entries/search/' + text,
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
    url: config.apiUrl + '/entries/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createEntry,
  indexEntries,
  showEntry,
  dynamicUpdateEntry,
  dynamicDeleteEntry,
  searchEntries
}
