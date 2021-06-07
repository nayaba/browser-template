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
        <div class="card-body">
          <h5 class="card-title">${entry.symbol}</h5>
          <p class="card-text">${entry.text}</p>
          <div class="card-footer">
          <button class="dynamic-delete-entry" data-id=${entry._id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
          <form class="dynamic-update-entry" data-id=${entry._id}>
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
  $('#modal-01-body').html(`
    <form class="modal-update-entry" data-id=${res}>
      <input class="update-entry-text" type="text" name="entry[text]" placeholder="text">
      <input class="update-entry-symbol" type="text" name="entry[symbol]" placeholder="symbol">
      <button class="modal-update-entry">Update Entry</button>
    </form>
    `)
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

const updateEntryModal = function () {
  $('#modal-01-body').html('Failed to delete entry')
  $('#modal-01').modal('show')
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
  navIndexEntries,
  updateEntryModal
}
