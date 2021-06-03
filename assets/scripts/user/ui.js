'user strict'
const signUpSuccess = function (res) {
  $('#messaging').text('Sign up successful')
}
const signUpFail = function () {
  $('#messaging').text('Sign up failed')
}

const signInSuccess = function () {
  $('#messaging').text('Sign in successful')
}

const signInFail = function () {
  $('#messaging').text('Sign in failed')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail
}
