'use strict'
const store = require('../store')
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-warning')
  $('#message').addClass('alert-success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-warning')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (formData) {
  store.user = formData.user
  successMessage('Signed in successfully')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#sign-in').trigger('reset')
}
//
// const onSignOutSuccess = function () {
//   successMessage('Signed out successfully')
//   $('#sign-in').trigger('reset')
// }
//
// const onSignOutFailure = function () {
//   failureMessage('Sign out failed')
//   $('#sign-in').trigger('reset')
// }
//
// const onChangePasswordSuccess = function () {
//   successMessage('Password change successful')
//   $('#change-password').trigger('reset')
// }
//
// const onChangePasswordFailure = function () {
//   failureMessage('Password change unsuccessful')
//   $('#change-password').trigger('reset')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
  // onSignOutSuccess,
  // onSignOutFailure,
  // onChangePasswordSuccess,
  // onChangePasswordFailure
}
