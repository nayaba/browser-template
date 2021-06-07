'user strict'
const store = require('./../store.js')

const createEntrySuccess = function (res) {
  store.entry = res.entry
  const entriesHtml = `
    <h4>${store.entry.symbol}</h4>
    <p>${store.entry.text}</p>
  `
  $('#entries-div').html(entriesHtml)
  $('#create-entry-form').trigger('reset')
}
const createEntryFail = function () {
  $('#modal-01-body').html('Failed to create new entry')
  $('#modal-01').modal('show')
}

const indexEntriesSuccess = function (res) {
  let entriesHtml = ''
  res.entries.forEach(function (entry) {
    entriesHtml += `
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">${entry.symbol}</h5>
          <p class="card-text">${entry.text}</p>
          <div class="card-footer">
          <button class="dynamic-delete-entry" data-id=${entry._id}>Delete Entry</button>
          <form class="dynamic-update-entry" data-id=${entry._id}>
            <input class="update-entry-text" type="text" name="entry[text]" placeholder="text">
            <input class="update-entry-symbol" type="text" name="entry[symbol]" placeholder="symbol">
            <button class="dynamic-update-entry">Update Entry</button>
          </form>
          </div>
          </div>
          </div>
        </div>
      </div>
  `
  })

  $('#entries-div-container').html(entriesHtml)
}
const indexEntriesFail = function () {
  $('#modal-01-body').html('Failed to find entries')
  $('#modal-01').modal('show')
}

const showEntrySuccess = function (res) {
  store.entry = res.entry
  // $('#entries-div').text(`${JSON.stringify(store.entry)}`)

  store.entry = res.entry
  const entriesHtml = `
    <h4>${store.entry.symbol}</h4>
    <p>${store.entry.text}</p>
  `
  $('#entries-div').html(entriesHtml)
  $('#show-entry-form').trigger('reset')

  $('#change-password-div').hide()
  $('#create-entry-div').hide()
  $('#index-entry-div').hide()
}
const showEntryFail = function () {
  $('#modal-01-body').html('Failed to find any matching entries')
  $('#modal-01').modal('show')
}

const updateEntrySuccess = function (res) {
  $('#modal-01-body').html('Successfully updated entry')
  $('#modal-01').modal('show')
  $('#update-entry-form').trigger('reset')
  $('#entries-div').trigger('reset')
}
const updateEntryFail = function () {
  $('#modal-01-body').html('Failed to update entry')
  $('#modal-01').modal('show')
}

const deleteEntrySuccess = function () {
  $('#modal-01-body').html('Entry successfully deleted')
  $('#modal-01').modal('show')
  $('#delete-entry-form').trigger('reset')
  $('#entries-div').trigger('reset')
}
const deleteEntryFail = function () {
  $('#modal-01-body').html('Failed to delete entry')
  $('#modal-01').modal('show')
}

const navCreateEntry = function () {
  $('#change-password-div').hide()
  $('#index-entry-div').hide()
  $('#create-entry-div').show()
}

const navIndexEntries = function () {
  $('#change-password-div').hide()
  $('#create-entry-div').hide()
  $('#index-entry-div').show()
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
  deleteEntryFail,
  navCreateEntry,
  navIndexEntries
}
