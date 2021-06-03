'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')

const onCreateEntry = function (event) {
  event.preventDefault()
  api.createEntry(getFormFields(event.target))
    .then(ui.createEntrySuccess)
    .catch(ui.createEntryFail)
}

module.exports = {
  onCreateEntry
}
