'user strict'
const store = require('./../store.js')

const createEntrySuccess = function (res) {
  store.entry = res.entry
  // need to refactor this into something legible in the future
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
}
const createEntryFail = function () {
  $('#messaging').text('Failed to create new entry')
}

const indexEntriesSuccess = function (res) {
  store.entries = res.entries
  console.log('stored entries in ui: ', store.entries)
  $('#entries-div').text(`${JSON.stringify(store.entries)}`)
}
const indexEntriesFail = function () {
  $('#messaging').text('Failed to find entries')
}

const updateEntrySuccess = function (res) {
  store.entry = res.entry
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
}
const updateEntryFail = function (res) {

}

module.exports = {
  createEntrySuccess,
  createEntryFail,
  indexEntriesSuccess,
  indexEntriesFail,
  updateEntrySuccess,
  updateEntryFail
}
