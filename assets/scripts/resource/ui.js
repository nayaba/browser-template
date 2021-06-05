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
  store.entries = res.entries

  // let myObj = {}
  //
  // for (let i = 0; i < store.entries.length; i++) {
  //   myObj[i] = `${JSON.stringify(store.entries[i].text)}`
  // }

  // console.log(myObj)
  $('#json').text(JSON.stringify(store.entries, null, 4))

  // const data = `${JSON.stringify(store.entries)}`
  // const myObj = JSON.parse(data)
  // console.log('obj.text: ', myObj[0].text)
  //
  // let indexMyObj = {}
  //
  // for (let i = 0; i < myObj.length; i++) {
  //   console.log('obj array: ', myObj[i].text)
  //   indexMyObj = myObj[i].text
  //   $('#entries-div').add(indexMyObj)
  // }

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
