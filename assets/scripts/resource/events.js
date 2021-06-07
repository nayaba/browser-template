'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateEntry = function (event) {
  event.preventDefault()
  api.createEntry(getFormFields(event.target))
    .then(ui.createEntrySuccess)
    .catch(ui.createEntryFail)
}

const onIndexEntries = function (event) {
  event.preventDefault()
  api.indexEntries()
    .then(ui.indexEntriesSuccess)
    .catch(ui.indexEntriesFail)
}

const onShowEntry = function (event) {
  event.preventDefault()
  api.showEntry(getFormFields(event.target))
    .then(ui.showEntrySuccess)
    .catch(ui.showEntryFail)
}

const onUpdateEntry = function (event) {
  event.preventDefault()

  const updateForm = event.target
  const id = $(updateForm).data('id')

  ui.dynamicUpdateEntrySuccess(id)
  // api.updateEntry(getFormFields(event.target))
  //   .then(ui.updateEntrySuccess)
  //   .catch(ui.updateEntryFail)
}

const onDynamicUpdateEntry = function (event) {
  event.preventDefault()

  const updateForm = event.target
  const id = $(updateForm).data('id')

  const data = getFormFields(updateForm)

  api.dynamicUpdateEntry(id, data)
    .then(ui.updateEntrySuccess)
    .then(onIndexEntries(event))
    .catch(ui.updateEntryFail)
}

const onDynamicDeleteEntry = function (event) {
  event.preventDefault()

  const updateForm = event.target
  const id = $(updateForm).data('id')

  api.dynamicDeleteEntry(id)
    .then(ui.deleteEntrySuccess)
    .catch(ui.deleteEntryFail)
}

const onNavCreateEntry = function (event) {
  event.preventDefault()

  ui.navCreateEntry()
}

const onNavIndexEntries = function (event) {
  event.preventDefault()

  ui.navIndexEntries()
}

module.exports = {
  onCreateEntry,
  onIndexEntries,
  onShowEntry,
  onDynamicUpdateEntry,
  onDynamicDeleteEntry,
  onNavCreateEntry,
  onNavIndexEntries,
  onUpdateEntry
}
