'user strict'
const store = require('./../store.js')

const createEntrySuccess = function (res) {
  store.entry = res.entry
  // need to refactor this into something legible in the future
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
  $('#create-entry-form').trigger('reset')
}
const createEntryFail = function () {
  $('#messaging').text('Failed to create new entry')
}

const indexEntriesSuccess = function (res) {
  console.log(res)
  // store.entries = res.entries
  // $('#json').text(JSON.stringify(store.entries, null, 4))
  let entriesHtml = ''
  res.entries.forEach(function (entry) {
    entriesHtml += `
      <h4>${entry.symbol}</h4>
      <p>${entry.text}</p>
      <p>ID: ${entry._id}</p>
      <button class="dynamic-destroy-entry" data-id=${entry._id}>Delete Entry</button>
      <form class="dynamic-update-entry" data-id=${entry._id}>
        <input class="update-entry-text" type="text" name="entry[text]" placeholder="text">
        <input class="update-entry-symbol" type="text" name="entry[symbol]" placeholder="symbol">
        <button class="dynamic-update-entry">Update Entry</button>
      </form>
    `
  })
  $('#entries-div').html(entriesHtml)

}
const indexEntriesFail = function () {
  $('#messaging').text('Failed to find entries')
}

const showEntrySuccess = function (res) {
  store.entry = res.entry
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
  $('#show-entry-form').trigger('reset')
}
const showEntryFail = function () {
  $('#messaging').text('Failed to find entry')
}

const updateEntrySuccess = function (res) {
  $('#messaging').text('Successfully updated entry')
  $('#update-entry-form').trigger('reset')
  $('#entries-div').trigger('reset')
}
const updateEntryFail = function () {
  $('#messaging').text('Failed to update entry')
}

const deleteEntrySuccess = function () {
  $('#messaging').text('Successfully deleted entry')
  $('#delete-entry-form').trigger('reset')
  $('#entries-div').trigger('reset')
}
const deleteEntryFail = function () {
  $('#messaging').text('Failed to delete entry')
}

module.exports = {
  createEntrySuccess,
  createEntryFail,
  indexEntriesSuccess,
  indexEntriesFail,
  showEntrySuccess,
  showEntryFail,
  updateEntrySuccess,
  updateEntryFail,
  deleteEntrySuccess,
  deleteEntryFail
}
