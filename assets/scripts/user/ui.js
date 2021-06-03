'user strict'
const signUpSuccess = function (res) {
  $('#messaging').text('Sign up successful')
}
const signUpFail = function (err) {
  $('#messaging').text('Sign up failed')
}

module.exports = {
  signUpSuccess,
  signUpFail
}
