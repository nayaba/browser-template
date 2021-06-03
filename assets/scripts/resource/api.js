'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createEntry = function (data) {
  console.log('data: ', data)
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/create-entry',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createEntry
}
