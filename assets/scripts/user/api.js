'use strict'

const config = require('./../config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-up'
  })
}

module.exports = {
  signUp
}
