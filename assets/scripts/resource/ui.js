'user strict'
const store = require('./../store.js')

const createEntrySuccess = function (res) {
  store.entry = res.entry
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
}

module.exports = {
  createEntrySuccess
}
