'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const vehicleEvents = require('./vehicle/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Vehicle events
  $('#add-vehicle').on('submit', vehicleEvents.onAddVehicle)

  // Get my vehicle list
  $('#list-vehicle button').on('click', vehicleEvents.onGetMyVehicle)

})
