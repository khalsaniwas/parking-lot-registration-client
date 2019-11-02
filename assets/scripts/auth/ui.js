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

  // Close sign-up box
  $('.sign-up').removeClass('show')
  $('.sign-up .dropdown-menu').removeClass('show')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (formData) {
  store.user = formData.user
  successMessage('Signed in successfully')
  $('.sign-out .nav-link').removeClass('disabled')
  $('.change-password .nav-link').removeClass('disabled')
  $('.sign-in').removeClass('show')
  $('.sign-in .dropdown-menu').removeClass('show')
  $('.sign-in .nav-link').addClass('disabled')
  $('.sign-up .nav-link').addClass('disabled')

  // Show content on homepage after sign in
  $('.hide-homepage').removeClass('d-none')

  // Hide welcome message after sign in
  $('#welcome-message').addClass('d-none')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully')
  $('#sign-in').trigger('reset')
  $('.sign-in .nav-link').removeClass('disabled')
  $('.sign-up .nav-link').removeClass('disabled')

  // Disable nav links
  $('.sign-out .nav-link').addClass('disabled')
  $('.change-password .nav-link').addClass('disabled')

  // Close sign-out box
  $('.sign-out').removeClass('show')
  $('.sign-out .dropdown-menu').removeClass('show')

  // Hide content on homepage after sign out
  $('.hide-homepage').addClass('d-none')

  // Show welcome message after sign out
  $('#welcome-message').removeClass('d-none')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Password change successful')
  $('#change-password').trigger('reset')

  // Disable nav link
  $('.change-password').removeClass('show')
  $('.change-password .dropdown-menu').removeClass('show')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change unsuccessful')
  $('#change-password').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
